FactoryGirl.define do
  factory :user do
    first_name "Lindsay"
    last_name "Larkin"
    zipcode "84103"
    sequence :email do |n|
      "test#{n}@test.com"
    end
    password "password"
  end
end
