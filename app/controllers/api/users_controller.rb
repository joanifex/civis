class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:user_reps, :update_zipcode]

  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def user_reps
  end

  def update_zipcode
    zipcode_params = params.require(:user).permit(:zipcode)
    if @user.update(zipcode_params)
      zipcode = zipcode_params["zipcode"]
      location = ZipCodes.identify(zipcode)
      if location.nil?
        render json: {errors: "Could not find zipcode"}, status: 400
      else
        state = location[:state_code]
        senators = Rep.where(state: state)
        Tie.delete_all("user_id = #{@user.id}")
        @user.ties.create(rep_id: senators.first.id)
        @user.ties.create(rep_id: senators.last.id)
        head :no_content
      end
    else
      render json: {errors: @user.errors.full_messages}, status: 400
    end
  end

  private
    def set_user
      @user = User.find(current_user.id)
    end
end
