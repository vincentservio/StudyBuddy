class CreateStacks < ActiveRecord::Migration[6.0]
  def change
    create_table :decks do |t|
      t.string :category
      

      t.timestamps
    end
  end
end
