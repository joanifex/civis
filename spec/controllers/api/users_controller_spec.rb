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

      it 'render JSON of the users reps' do
        get :user_reps, format: :json
        parsed = JSON.parse(response.body)
        reps = parsed["reps"]
        expect(reps.first['id']).to eq(@user.reps.first.id)
        expect(reps.count).to eq(@user.reps.count)
      end
    end

  end
end
