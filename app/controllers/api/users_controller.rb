class Api::UsersController < ApplicationController
  skip_before_filter :verify_authenticity_token
  before_action :set_user, only: [:user_reps, :update_zipcode]

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

  def update_zipcode
    zipcode = params.require(:user).permit(:zipcode)
    if @user.update(zipcode)
      Tie.delete_all("user_id = #{@user.id}")
      location = Geocoder.search(@user.zipcode)
      state = location.first.data['address_components'][3]['short_name']
      senators = Rep.where(state: state)
      @user.ties.create(rep_id: senators.first.id)
      @user.ties.create(rep_id: senators.last.id)
      render json: @user
    else
      render json: {errors: @user.errors.full_messages}, status: 401
    end
  end

  private
    def set_user
      @user = User.find(current_user.id)
    end
end
