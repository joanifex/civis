# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  remember_created_at    :datetime
#  sign_in_count          :integer          default("0"), not null
#  current_sign_in_at     :datetime
#  last_sign_in_at        :datetime
#  current_sign_in_ip     :inet
#  last_sign_in_ip        :inet
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  first_name             :string           not null
#  last_name              :string           not null
#  zipcode                :string
#

class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  has_many :ties, dependent: :destroy
  has_many :reps, through: :ties

  def full_name
    "#{first_name} #{last_name}"
  end

  def set_reps_pictures
    set_twitter
    self.reps.each do |rep|
      if rep.profile_url.nil?
        profile_url = @client.user(rep.twitter_account).profile_image_url.to_s
        rep.update(profile_url: profile_url)
      end
    end
  end

  def create_ties(address)
    # TODO: Add customs error messages
    # result = { message: 'Created Ties', success: true }
    success = true
    begin
      api_url = "https://www.googleapis.com/civicinfo/v2/representatives?"
      address = "address=#{address}"
      api_key = "key=#{ENV['GOOGLE_CIVIC_API_KEY']}"
      levels = "levels=country"
      offices = "includeOffices=false"
      roles = "roles=legislatorLowerBody"
      request = "#{api_url}#{address}&#{api_key}&#{levels}&#{offices}&#{roles}"
      response = HTTParty.get(request, format: :plain)
      parsed = JSON.parse response, symbolize_names: true
      division = parsed[:divisions].keys.first.to_s.split(/cd:/)
      district = division.length == 1 ? "1" : division.last
      state = parsed[:normalizedInput][:state]
      representative = Rep.find_by(district: district, state: state)
      senators = Rep.where(state: state, title: 'Senator')
      Tie.delete_all("user_id = #{self.id}")
      self.ties.create(rep_id: senators.first.id)
      self.ties.create(rep_id: senators.last.id)
      self.ties.create(rep_id: representative.id)
    rescue => e
      success = false
      # check what is e if that gives a good error
      # result = { message: e, success: false }
    end
    success
  end

  private
    def set_twitter
      @client = Twitter::REST::Client.new do |config|
        config.consumer_key = ENV['TWITTER_API_KEY']
        config.consumer_secret = ENV['TWITTER_SECRET']
      end
    end
end
