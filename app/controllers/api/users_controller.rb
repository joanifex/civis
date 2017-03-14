class Api::UsersController < ApplicationController
  before_action :set_user, only: [:user_reps]

  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def user_reps
    render json: @user.reps
  end

  private
    def set_user
      @user = User.find(current_user.id)
    end
end
