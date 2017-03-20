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

require 'rails_helper'

RSpec.describe Rep, type: :model do
  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:first_name) }
    it { should respond_to(:last_name) }
    it { should respond_to(:state) }
    it { should respond_to(:phone) }
    it { should respond_to(:party) }
    it { should respond_to(:url) }
    it { should respond_to(:next_election) }
    it { should respond_to(:twitter_account) }
    it { should respond_to(:profile_url) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:state) }
  end

  describe 'associations' do
    it { should have_many(:ties).dependent(:destroy) }
    it { should have_many(:users).through(:ties) }
  end

  describe 'instance methods' do
    before(:each) do
      @rep = FactoryGirl.create(:rep)
    end

    it 'gives full name' do
      expect(@rep.full_name).to eq("#{@rep.first_name} #{@rep.last_name}")
    end

    it 'makes rep profile picture large' do
      correct_url = "http://pbs.twimg.com/profile_images/2284174872/7df3h38zabcvjylnyfe3.png"
      expect(@rep.profile_large_url).to eq(correct_url)
    end

    it 'gives full party name' do
      expect(@rep.full_party).to eq("Democrat")
    end

    it 'changes state abbreviation to states full name' do
      expect(@rep.full_state).to eq("North Dakota")
    end
  end
end
