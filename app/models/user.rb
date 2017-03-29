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

  def create_ties(reps)
    self.ties.delete_all
    reps.each do |rep|
      self.ties.create(
        rep_id: rep.id,
        new_articles: rep.new_articles
      )
    end
  end

end
