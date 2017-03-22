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

  def user_reps
    current_user.set_reps_pictures
  end

  def update_zipcode
    address = user_params["zipcode"]
    if current_user.create_ties(address)
      head :no_content
    else
      render json: {errors: "ERROR"}, status: 400
    end
  end
  
  private
    def user_params
      params.require(:user).permit(:zipcode)
    end
end
