require 'rails_helper'

RSpec.describe Tie, type: :model do
  describe 'associations' do
    it { should belong_to(:user).dependent(:destroy) }
    it { should belong_to(:rep).dependent(:destroy) }
  end
end
