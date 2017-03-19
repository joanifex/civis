class Api::UsersController < ApplicationController

  require 'twitter'

  skip_before_action :verify_authenticity_token
  before_action :set_user, only: [:user_reps, :zipcode, :update_zipcode]
  before_action :set_twitter, only: [:user_reps]

  def logged_in_user
    if current_user
      render json: current_user
    else
      render json: {}
    end
  end

  def zipcode
  end

  def user_reps
    @user.reps.each do |rep|
      if rep.profile_url.nil?
        profile_url = @client.user(rep.twitter_account).profile_image_url.to_s
        rep.update(profile_url: profile_url)
      end
    end
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

    def set_twitter
      @client = Twitter::REST::Client.new do |config|
        config.consumer_key = ENV['TWITTER_API_KEY']
        config.consumer_secret = ENV['TWITTER_SECRET']
      end
    end
end
