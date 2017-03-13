class Tie < ApplicationRecord

  # QUESTION: User.ties not working, User::Ty
  belongs_to :user
  belongs_to :rep
end
