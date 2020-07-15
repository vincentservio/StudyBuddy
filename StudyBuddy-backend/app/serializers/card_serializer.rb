class CardSerializer < ActiveModel::Serializer
  attributes :id, :word, :define, :gotit, :deck_id
  belongs_to :deck
end
