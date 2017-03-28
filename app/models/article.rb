class Article < ApplicationRecord
  validates_presence_of :web_url, :snippet, :pub_date, :headline, :lead_paragraph
  belongs_to :rep

  def formatted_pub_date
    Date.strptime(self.pub_date.to_s.split[0], "%Y-%m-%d").to_s
  end

  def formatted_snippet
    self.snippet.gsub("<strong>", "").gsub("</strong>", "")
  end

end
