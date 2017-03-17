# == Schema Information
#
# Table name: reps
#
#  id         :integer          not null, primary key
#  title      :string
#  first_name :string
#  last_name  :string
#  state      :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Rep < ApplicationRecord
  validates_presence_of :title, :first_name, :last_name, :state
  has_many :ties, dependent: :destroy
  has_many :users, through: :ties

  def full_name
    "#{first_name} #{last_name}"
  end

  def profile_large_url
    self.profile_url.gsub("_normal", "")
  end

end
