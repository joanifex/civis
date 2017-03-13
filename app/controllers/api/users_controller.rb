class Api::UsersController < ApplicationController
  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def user_reps
    user = User.find(current_user.id)
    render json: user.reps
  end
end
