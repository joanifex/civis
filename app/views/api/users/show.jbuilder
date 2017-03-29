json.first_name current_user.first_name
json.last_name current_user.last_name
json.full_name current_user.full_name
json.id current_user.id
json.email current_user.email
json.reps current_user.reps.each do |rep|
  json.partial! 'api/reps/show', rep: rep
  json.new_articles current_user.ties.find_by(rep_id: rep.id).new_articles
end
