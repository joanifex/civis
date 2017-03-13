class Api::UsersController < ApplicationController
  before_action :set_user, only: [:user_reps, :find_user_reps]

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

  def find_user_reps
    location = Geocoder.search(@user.zipcode)
    state = location.first.data['address_components'][3]['short_name']
    api_url = "https://api.propublica.org/congress/v1/members/senate/#{state}/current.json"
    header = { "X-API-Key" => ENV['CONGRESS_API_KEY'] }
    response = HTTParty.get(api_url, headers: header, format: :plain)
    senators = JSON.parse response, symbolize_names: true
    senator_info = senators[:results].map do |sen| 
      { name: sen[:name], title: sen[:role] }
    end
    render json: senator_info
  end

  private
    def set_user 
      @user = User.find(current_user.id)
    end
end
