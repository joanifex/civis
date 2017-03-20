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

require 'rails_helper'

RSpec.describe User, type: :model do

  describe 'attributes' do
    it { should respond_to(:first_name) }
    it { should respond_to(:last_name) }
    it { should respond_to(:zipcode) }
  end

  describe 'validations' do
    it 'should validate zipcode format' do
      valid_zipcode = '84103'
      valid_zipcode_2 = '84103-1234'
      invalid_zipcode = 'A1234'
      invalid_zipcode_2 = '1234567'
      invalid_zipcode_3 = '123'
      user = FactoryGirl.create(:user, zipcode: valid_zipcode)
      expect(user).to eq(User.last)
      user_2 = FactoryGirl.create(:user, zipcode: valid_zipcode_2)
      expect(user_2).to eq(User.last)
      user.zipcode = invalid_zipcode
      expect(user.valid?).to be_falsey
      user.zipcode = invalid_zipcode_2
      expect(user.valid?).to be_falsey
      user.zipcode = invalid_zipcode_3
      expect(user.valid?).to be_falsey
    end
  end

  describe 'association' do
    it { should have_many(:ties).dependent(:destroy) }
    it { should have_many(:reps).through(:ties) }
  end

  describe 'instance methods' do
    before(:each) do
      @user = FactoryGirl.create(:user)
    end

    it 'gives full name' do
      expect(@user.full_name).to eq("#{@user.first_name} #{@user.last_name}")
    end

    it 'sets the rep profile picture' do
      rep = @user.reps.create(
        title: 'Senator', 
        first_name: 'Your', 
        last_name: 'face', 
        state: 'Utah',
        twitter_account: 'SenOrrinHatch'
        )
      profile_picture = "http://pbs.twimg.com/profile_images/1265985804/09232010_master_copy_normal.jpg"
      @user.set_reps_pictures
      expect(@user.reps.last.profile_url).to eq(profile_picture)

      # call @user.set_reps_pictures
      # expect new reps profile_url to eq what it should
    end
  end
end
