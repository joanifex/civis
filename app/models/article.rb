class Article < ApplicationRecord
  validates_presence_of :web_url, :snippet, :pub_date, :headline, :lead_paragraph
  belongs_to :rep

    def formatted_pub_date
      DateTime.parse(self.pub_date.to_s)
    end

end
