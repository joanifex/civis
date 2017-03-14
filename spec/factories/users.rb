FactoryGirl.define do
  factory :user do
    first_name "Lindsay"
    last_name "Larkin"
    zipcode "84103"
    sequence :email do |n|
      "test#{n}@test.com"
    end
    password "password"

    factory :user_with_reps do
      after(:create) do |user|
        user.reps << FactoryGirl.create(:rep)
        user.reps << FactoryGirl.create(:rep)
      end
    end
  end
end
