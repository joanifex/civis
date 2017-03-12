class Rep < ApplicationRecord
  validates_presence_of :title, :first_name, :last_name, :state
  has_many :ties, dependent: :destroy
  has_many :users, through: :ties 

  def full_name
    "#{first_name} #{last_name}"
  end
end
