json.extract! @user, :zipcode
json.reps @user.reps do |rep|
  json.first_name rep.first_name
  json.last_name rep.last_name
  json.state rep.state
  json.title rep.title
  json.id rep.id
  json.party rep.party
  json.phone rep.phone
  json.url rep.url
  json.twitter_account rep.twitter_account
  json.next_election rep.next_election 
end
