class Api::RepsController < ApplicationController
  # QUESTION: API Architecture... should this method be in user API?

  def show
    user = User.find(params[:user_id])
    render json: user.reps
  end
end
