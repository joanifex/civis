require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'attributes' do
    it { should respond_to(:first_name) }
    it { should respond_to(:last_name) }
    it { should respond_to(:zipcode) }
  end

  describe 'validations' do
    it { should validate_presence_of(:first_name) }
    it { should validate_presence_of(:last_name) }
    it { should validate_presence_of(:zipcode) }
    it 'should validate zipcode format' do
      valid_zipcode = '84103'
      invalid_zipcode = 'A1234'
      invalid_zipcode_2 = '1234567'
      invalid_zipcode_3 = '123'
      expect(FactoryGirl.create(:user, zipcode: valid_zipcode)).to eq(true)
      #TODO: Finish the test
    end
  end

  describe 'association' do
    it { should have_many(:ties).dependent(:destroy) }
    it { should have_many(:reps).through(:ties) }
  end

  describe 'instance methods' do
    it 'gives full name' do
      user = FactoryGirl.create(:user)

      expect(user.full_name).to eq("#{user.first_name} #{user.last_name}")
    end
  end

end
