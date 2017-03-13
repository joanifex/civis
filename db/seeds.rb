user = User.create(
  email: 'test@test.com',
  password: 'password',
  first_name: 'Valerie',
  last_name: 'Barela',
  zipcode: '84102'
)

rep1 = Rep.create(
  first_name: 'Mike',
  last_name: 'Lee',
  state: 'Utah',
  title: 'Senator'
)

rep2 = Rep.create(
  first_name: 'Orrin',
  last_name: 'Hatch',
  state: 'Utah',
  title: 'Senator'
)

Tie.create(
  user_id: user.id,
  rep_id: rep1.id
)

Tie.create(
  user_id: user.id,
  rep_id: rep2.id
)
