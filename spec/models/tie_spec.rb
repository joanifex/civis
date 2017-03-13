require 'rails_helper'

RSpec.describe Tie, type: :model do
  describe 'associations' do
    it { should belong_to(:user) }
    it { should belong_to(:rep) }
  end
end
