# == Schema Information
#
# Table name: reps
#
#  id         :integer          not null, primary key
#  title      :string
#  first_name :string
#  last_name  :string
#  state      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rep < ApplicationRecord
  validates_presence_of :title, :first_name, :last_name, :state
  has_many :ties, dependent: :destroy
  has_many :users, through: :ties
  has_many :articles, dependent: :destroy

  def full_name
    "#{first_name} #{last_name}"
  end

  def profile_large_url
    self.profile_url.gsub("_normal", "")
  end

  def full_party
    self.party === "D" ? "Democrat" : "Republican"
  end

  def full_state
    state_hash = {
      AK: "Alaska",
      AL: "Alabama",
      AR: "Arkansas",
      AS: "American Samoa",
      AZ: "Arizona",
      CA: "California",
      CO: "Colorado",
      CT: "Connecticut",
      DC: "District of Columbia",
      DE: "Delaware",
      FL: "Florida",
      GA: "Georgia",
      GU: "Guam",
      HI: "Hawaii",
      IA: "Iowa",
      ID: "Idaho",
      IL: "Illinois",
      IN: "Indiana",
      KS: "Kansas",
      KY: "Kentucky",
      LA: "Louisiana",
      MA: "Massachusetts",
      MD: "Maryland",
      ME: "Maine",
      MI: "Michigan",
      MN: "Minnesota",
      MO: "Missouri",
      MS: "Mississippi",
      MT: "Montana",
      NC: "North Carolina",
      ND: "North Dakota",
      NE: "Nebraska",
      NH: "New Hampshire",
      NJ: "New Jersey",
      NM: "New Mexico",
      NV: "Nevada",
      NY: "New York",
      OH: "Ohio",
      OK: "Oklahoma",
      OR: "Oregon",
      PA: "Pennsylvania",
      PR: "Puerto Rico",
      RI: "Rhode Island",
      SC: "South Carolina",
      SD: "South Dakota",
      TN: "Tennessee",
      TX: "Texas",
      UT: "Utah",
      VA: "Virginia",
      VI: "Virgin Islands",
      VT: "Vermont",
      WA: "Washington",
      WI: "Wisconsin",
      WV: "West Virginia",
      WY: "Wyoming"
    }
    state_hash[state.to_sym]
  end

  def fetch_articles
    uri = URI("https://api.nytimes.com/svc/search/v2/articlesearch.json")
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    uri.query = URI.encode_www_form({
      "api-key" => ENV["NYT_API_KEY"],
      "q" => "\"#{self.full_name}\"",
      "sort" => "newest",
      "fl" => "web_url,pub_date,headline,lead_paragraph",
      "hl" => "true"
    })
    begin
      request = Net::HTTP::Get.new(uri.request_uri)
      articles = JSON.parse(http.request(request).body)["response"]["docs"]
      articles.each do |article|
      self.articles.create(
        web_url: article["web_url"],
        snippet: article["snippet"],
        pub_date: article["pub_date"],
        headline: article["headline"]["main"],
        lead_paragraph: article["lead_paragraph"]
      )
    end
    rescue => e
      binding.pry
      puts "Could not find articles for #{self.full_name}"
    end
  end
end
