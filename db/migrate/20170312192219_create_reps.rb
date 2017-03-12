class CreateReps < ActiveRecord::Migration[5.0]
  def change
    create_table :reps do |t|
      t.string :title, null: false, default: ''
      t.string :first_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :state, null: false, default: ''
      # QUESTION: default?

      t.timestamps
    end
  end
end
