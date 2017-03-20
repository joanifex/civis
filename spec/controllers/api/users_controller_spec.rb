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
        reps = JSON.parse(response.body)
        # TODO: fix no implicit integer to string error in pry
        expect(reps.first[1].first['id'].to_s).to eq(@user.reps.first.id.to_s)
      end
    end

  end
end
