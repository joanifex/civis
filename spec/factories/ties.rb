# == Schema Information
#
# Table name: ties
#
#  id         :integer          not null, primary key
#  rep_id     :integer
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

FactoryGirl.define do
  factory :tie do
    rep
    user
  end
end
