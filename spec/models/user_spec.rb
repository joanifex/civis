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
  end

  describe 'association' do
    it { should have_many(:ties).dependent(:destroy) }
    it { should have_many(:reps).through(:ties) }
  end

  describe 'instance methods' do
    it 'gives full name' do
      @user = FactoryGirl.create(:user_with_reps)
      expect(@user.full_name).to eq("Lindsay Larkin")
    end
  end

  describe 'class methods' do
    context '@user.create_ties' do
      it 'creates ties between the user and its reps' do
        @user = FactoryGirl.create(:user)
        @sen = FactoryGirl.create(:senator_from_utah)
        @sen2 = FactoryGirl.create(:senator2_from_utah)
        @rep = FactoryGirl.create(:representative_from_utah)
        @user.create_ties([@sen, @sen2, @rep])
        expect(@user.ties[0].rep_id).to eq(@sen.id)
        expect(@user.ties[1].rep_id).to eq(@sen2.id)
        expect(@user.ties[2].rep_id).to eq(@rep.id)
      end
    end
  end
end
