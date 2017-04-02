json.first_name rep.first_name
json.last_name rep.last_name
json.full_name rep.full_name
json.state rep.full_state
json.title rep.title
json.id rep.id
json.party rep.full_party
json.phone rep.phone
json.url rep.url
json.bio rep.formatted_bio
json.twitter_account rep.twitter_account
json.next_election rep.next_election
json.profile_url rep.profile_url
json.profile_large_url rep.profile_large_url
json.district rep.district
json.contact_url rep.contact_url
json.articles rep.articles.order("pub_date desc") do |article|
  json.partial! 'api/articles/show/', article: article
end
if current_user
  json.new_articles current_user.ties.find_by(rep_id: rep.id).new_articles
end
