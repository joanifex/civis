require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'GET #user_reps' do

    it "returns HTTP success" do
      # TODO: Fix this test
      get :user_reps
      expect(response).to have_http_status(:success)
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
end
