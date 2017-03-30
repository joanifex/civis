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
    before(:each) do
      @user = FactoryGirl.create(:user_with_reps)
    end

    it 'gives full name' do
      expect(@user.full_name).to eq("Lindsay Larkin")
    end

    context "@user.create_ties" do
      it "sets the address parameter with the address argument" do
        expect(@user.reps.first.first_name).to eq("Ian")
        FactoryGirl.create(:senator_from_utah)
        FactoryGirl.create(:senator2_from_utah)
        FactoryGirl.create(:representative_from_utah)
        @user.create_ties("84103")
      end
    end

    it 'fails to set the address parameter with the address argument'
  end
end
