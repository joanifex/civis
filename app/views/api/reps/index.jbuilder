json.reps @reps.each do |rep|
  json.partial! 'api/reps/show', rep: rep
end
