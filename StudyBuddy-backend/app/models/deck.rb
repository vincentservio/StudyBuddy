class Deck < ApplicationRecord
    validates :category, presence: true, uniqueness: true
    has_many :cards

end
n