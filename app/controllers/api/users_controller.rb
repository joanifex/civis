class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def logged_in_user
    if current_user
      render :show
    else
      render json: {}
    end
  end

  def show
  end

  def update
    if current_user.update(user_params)
      render :show
    else
      render json: { errors: "Could Not Save Updates #{current_user.errors.full_messages.to_sentence}" }, status: 400
    end
  end

  def destroy
    User.find(params[:id]).destroy
  end

  private
    def user_params
      params.require(:user).permit(:first_name, :last_name)
    end
end
