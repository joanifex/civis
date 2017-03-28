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

require 'rails_helper'

RSpec.describe Tie, type: :model do
  describe 'attributes' do
    it { should respond_to(:new_articles)}
    it { should respond_to(:subscription)}
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:rep) }
  end
end
