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
    state "North Dakota"
  end
end
