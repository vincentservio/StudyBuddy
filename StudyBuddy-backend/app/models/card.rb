class Card < ApplicationRecord
    # validates :deck_id, presence: true, uniqueness: true
    belongs_to :deck 
end
