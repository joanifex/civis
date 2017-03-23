class Article < ApplicationRecord
  validates_presence_of :web_url, :snippet, :pub_date, :headline, :lead_paragraph
  validates_uniqueness_of :web_url
  belongs_to :rep
end
