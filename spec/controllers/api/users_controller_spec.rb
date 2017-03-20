require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do
  include Devise::Test::ControllerHelpers

  describe 'GET #user_reps' do
     before(:each) do
       @request.env["devise.mapping"] = Devise.mappings[:user]
       user = FactoryGirl.create(:user_with_reps)
       user.confirm!
       sign_in user
     end

    it "returns HTTP success" do
    end

    it "returns the JSON of reps" do
      # QUESTION: how do we do this????
      # FactoryGirl creates a user with rep associations
      # send the HTTP request, with the user parameter
      expect(false).to eq(true)
      # parsed = JSON.parse(response.body)
      # expect(parsed.size).to eq(2)
      # expect(parsed.full_name).to eq("Jeremy Cram")
    end
  end

  describe 'GET #user_reps without a user' do
    it 'a thing' do
      get :user_reps
      expect(response).to be_success    
    end
  end
end
