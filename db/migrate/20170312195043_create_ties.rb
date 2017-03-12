class CreateTies < ActiveRecord::Migration[5.0]
  def change
    create_table :ties do |t|
      t.belongs_to :rep, null: false
      t.belongs_to :user, null: false

      t.timestamps
    end
  end
end
