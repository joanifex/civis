json.user current_user do |user|
  json.first_name user.first_name
  json.last_name user.last_name
  json.full_name user.full_name
end