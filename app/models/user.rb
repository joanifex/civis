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

  validates_format_of :zipcode, with: /\A\d{5}-\d{4}|\A\d{5}\z/, message:
  'Should be Valid', allow_blank: true

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

  def create_ties(state)
    senators = Rep.where(state: state, title: 'Senator')
    representatives = Rep.where(state: state, title: 'Representative').first
    Tie.delete_all("user_id = #{self.id}")
    self.ties.create(rep_id: senators.first.id)
    self.ties.create(rep_id: senators.last.id)
    self.ties.create(rep_id: representatives.id)
  end
#TODO: create new ties for rep 
  private
    def set_twitter
      @client = Twitter::REST::Client.new do |config|
        config.consumer_key = ENV['TWITTER_API_KEY']
        config.consumer_secret = ENV['TWITTER_SECRET']
      end
    end
end
