class Pet < ApplicationRecord
  belongs_to :user
  has_many :comments, through: :user, dependent: :destroy

end
