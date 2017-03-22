class Api::UsersController < ApplicationController
  require 'twitter'
  skip_before_action :verify_authenticity_token

  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def show_user
  end

  def user_reps
    current_user.set_reps_pictures
  end

  def update_zipcode
    if current_user.update(user_params)
      location = ZipCodes.identify(current_user.zipcode)
      if location.nil?
        render json: {errors: "Could not find zipcode"}, status: 400
      else
        state = location[:state_code]
        current_user.create_ties(state)
        head :no_content
      end
    else
      render json: {errors: current_user.errors.full_messages}, status: 400
    end
  end

  private
  def user_params
    params.require(:user).permit(:zipcode)
  end
end
