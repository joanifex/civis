require 'rails_helper'

RSpec.describe Rep, type: :model do
  describe 'attributes' do
    it { should respond_to(:title) }
    it { should respond_to(:first_name) }
    it { should respond_to(:last_name) }
    it { should respond_to(:state) }
  end

  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:state) }
  end

  describe 'associations' do
    it { should have_many(:ties) }
    it { should have_many(:users).through(:ties) }
  end
  # QUESTION: have_many spec test

  describe 'instance methods' do
    it 'gives full name' do
      rep = FactoryGirl.create(:rep)
      expect(rep.full_name).to eq("#{rep.first_name} #{rep.last_name}")
    end
  end
end
