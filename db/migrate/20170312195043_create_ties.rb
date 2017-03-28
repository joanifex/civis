class CreateTies < ActiveRecord::Migration[5.0]
  def change
    create_table :ties do |t|
      t.integer :new_articles, default: 0
      t.boolean :subscription, default: false
      t.belongs_to :rep, null: false
      t.belongs_to :user, null: false
      t.timestamps
    end
  end
end
