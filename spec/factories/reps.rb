# == Schema Information
#
# Table name: reps
#
#  id         :integer          not null, primary key
#  title      :string
#  first_name :string
#  last_name  :string
#  state      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :rep do
    title "Senator"
    first_name "Ian"
    last_name "Wright"
    state "ND"
    party "D"
    profile_url "http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3_normal.png"

    factory :senator_from_utah do
      id '1'
      state "UT"
      title "Senator"
    end

    factory :senator2_from_utah do
      id '2'
      state "UT"
      title "Senator"
    end

    factory :representative_from_utah do
      id '3'
      state "UT"
      title "Representative"
      district "2"
    end


  end
end
