class Api::UsersController < ApplicationController
  require 'twitter'
  skip_before_action :verify_authenticity_token

  def logged_in_user
    if current_user
      render :current_user
    else
      render json: {}
    end
  end

  def update_user
    if current_user.update(user_params)
      render :current_user
    else
      render json: { errors: "Could Not Save Updates" }, status: 400
    end
  end

  def user_reps
    current_user.set_reps_pictures
  end

  def update_address
    address = params["address"]
    if current_user.create_ties(address)
      head :no_content
    else
      render json: {errors: "ERROR"}, status: 400
    end
  end

  def destroy
    User.find(params[:id]).destroy
  end

  def geolocate
    
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end
end
