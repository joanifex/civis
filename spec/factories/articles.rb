FactoryGirl.define do
  factory :article do
    web_url "web_url"
    snippet "snippet"
    pub_date "2017-03-22 13:45:43"
    headline "HEADLINE!"
    lead_paragraph "lead_paragraph"
    rep :rep
  end
end
