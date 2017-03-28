class Api::RepsController < ApplicationController
  require 'wikipedia'

  def index
    address = params["address"]
    if params["coords"] && params["coords"].has_key?("lat") && params["coords"].has_key?("lng")
      coords = {lat: params["coords"]["lat"], lng: params["coords"]["lng"]}
      address = convert_coords_to_address(coords)
    end
    civic_info = fetch_civic_info(address)
    if civic_info.has_key?(:error)
      render json: "Invalid Address", status: 400
    else
      begin
        @reps = convert_civic_info_to_reps(civic_info)
        current_user.create_ties(@reps) if current_user
      rescue => e
        render json: "Requires More Specific Address", status: 400
      end
    end
  end

  private
    def convert_coords_to_address(coords)
      url = 'https://maps.googleapis.com/maps/api/geocode/json'
      query = {
        "latlng": "#{coords[:lat]},#{coords[:lng]}",
        "key": ENV["GOOGLE_MAPS_API_KEY"]
      }
      HTTParty.get(url, query: query)["results"].first["formatted_address"]
    end

    def fetch_civic_info(address)
      url = "https://www.googleapis.com/civicinfo/v2/representatives"
      query = {
        "address": address,
        "key": ENV['GOOGLE_CIVIC_API_KEY'],
        "levels": "country",
        "includeOffices": false,
        "roles": "legislatorLowerBody"
      }
      response = HTTParty.get(url, query: query, format: :plain)
      JSON.parse response, symbolize_names: true
    end

    def convert_civic_info_to_reps(civic_info)
      division = civic_info[:divisions].keys.first.to_s.split(/cd:/)
      district = division.length == 1 ? "1" : division.last
      state = civic_info[:normalizedInput][:state]
      representative = Rep.find_by(district: district, state: state)
      senators = Rep.where(state: state, title: 'Senator')
      [*senators, representative]
    end


end
