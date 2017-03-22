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
    end

    it 'creates representative ties with valid address' do
      #TODO: finish this 
    end
  end
end
