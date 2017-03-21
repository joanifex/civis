require 'rails_helper'

RSpec.describe Api::UsersController, type: :controller do

  describe 'GET #logged_in_user' do
    context 'logged out' do
      it 'blocks unauthenticated access' do
        get :logged_in_user
        user = JSON.parse(response.body)
        expect(user).to eq({})
      end
    end

    context 'logged in' do
      login_user

      it 'allows authenticated access' do
        get :logged_in_user
        user = JSON.parse(response.body)
        expect(user['id']).to eq(@user.id)
      end
    end
  end

  describe 'GET #user_reps' do
    context 'logged in user' do
      login_user

      it 'returns http success' do
        get :user_reps, format: :json
        expect(response).to have_http_status(:success)
      end

      it 'calls the sets_reps_pictures method on the current user' do
        # expect the users reps to not have profile_urls
        # get :user_reps, format: :json
        # expect the users reps to have profile_urls
        binding.pry
      end

      it 'render JSON of the users reps' do
        get :user_reps, format: :json
        parsed = JSON.parse(response.body)
        reps = parsed["reps"]
        expect(reps.first['id']).to eq(@user.reps.first.id)
        expect(reps.count).to eq(@user.reps.count)
      end
    end
  end

  describe 'PATCH #update_zipcode' do
    it 'returns http success' do
    end

    it 'finds the users location by zipcode' do
    end

    it 'renders json of errors if location is nil' do
    end

    it 'finds the state based upon the location' do
    end

    it 'updates the users zipcode' do
    end

    it 'renders json of errors if zipcode is invalid' do
    end
  end
end
