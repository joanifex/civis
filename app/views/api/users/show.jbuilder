json.first_name current_user.first_name
json.last_name current_user.last_name
json.full_name current_user.full_name
json.id current_user.id
json.email current_user.email
# TODO: refactor to reuse index.jbuilder?
json.reps current_user.reps.each do |rep|
  json.first_name rep.first_name
  json.last_name rep.last_name
  json.full_name rep.full_name
  json.state rep.full_state
  json.title rep.title
  json.id rep.id
  json.party rep.full_party
  json.phone rep.phone
  json.url rep.url
  json.twitter_account rep.twitter_account
  json.next_election rep.next_election
  json.profile_url rep.profile_url
  json.profile_large_url rep.profile_large_url
  json.district rep.district
  json.articles rep.articles.each do |article|
    json.web_url article.web_url
    json.snippet article.snippet
    json.pub_date article.formatted_pub_date
    json.headline article.headline
    json.lead_paragraph article.lead_paragraph
  end
end
