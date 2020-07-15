class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :word
      t.string :define
      t.boolean :gotit
      t.integer :deck_id
      t.timestamps
    end
  end
end
