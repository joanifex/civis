user = User.create(
  email: 'test@test.com',
  password: 'password',
  first_name: 'Valerie',
  last_name: 'Barela',
  zipcode: '84102'
)

puts 'Test user created.'

file = File.read('lib/senate.json')
parsed = JSON.parse(file)
members = parsed["members"]
members.each do |mem|
  Rep.create(
    first_name: mem["first_name"],
    last_name: mem["last_name"],
    state: mem["state"],
    title: "Senator",
    party: mem["party"],
    phone: mem["phone"],
    url: mem["url"],
    next_election: mem["next_election"],
    twitter_account: mem["twitter_account"]
  )
end

puts 'Reps created'

location = ZipCodes.identify(user.zipcode)
state = location[:state_code]
senators = Rep.where(state: state)

Tie.create(
  user_id: user.id,
  rep_id: senators.first.id
)

Tie.create(
  user_id: user.id,
  rep_id: senators.last.id
)

puts 'Ties created.'
