json.reps current_user.reps do |rep|
  json.first_name rep.first_name
  json.last_name rep.last_name
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
end
