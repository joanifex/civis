class User < ApplicationRecord

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  validates_presence_of :first_name, :last_name, :zipcode
  validates_format_of :zipcode, with: /\A\d{5}-\d{4}|\A\d{5}\z/, message: 'Zipcode Should be Valid'

  has_many :ties, dependent: :destroy
  has_many :reps, through: :ties

  def full_name
    "#{first_name} #{last_name}"
  end
end
