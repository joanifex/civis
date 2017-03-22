class Article < ApplicationRecord
  validates_presence_of :web_url, :snippet, :pub_date, :headline, :lead_paragraph
  belongs_to :rep
end
