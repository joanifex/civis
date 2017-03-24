# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default("0"), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string           not null
#  last_name              :string           not null
#  zipcode                :string
#

FactoryGirl.define do
  factory :user do
    first_name "Lindsay"
    last_name "Larkin"
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
