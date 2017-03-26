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
  validates_presence_of :first_name

  def full_name
    "#{first_name} #{last_name}"
  end

  # TODO: FIX THIS METHOD. Not good. Bad. Goes somewhere else. 
  def set_reps_pictures
    set_twitter
    self.reps.each do |rep|
      if rep.profile_url.nil?
        profile_url = @client.user(rep.twitter_account).profile_image_url.to_s
        rep.update(profile_url: profile_url)
      end
    end
  end

  def create_ties(reps)
    # TODO: should this method go somewhere else?
    self.ties.delete_all
    reps.each { |rep| self.ties.create(rep_id: rep.id) }
  end

  private
    def set_twitter
      @client = Twitter::REST::Client.new do |config|
        config.consumer_key = ENV['TWITTER_API_KEY']
        config.consumer_secret = ENV['TWITTER_SECRET']
      end
    end
end
