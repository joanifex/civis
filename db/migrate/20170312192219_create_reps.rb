class CreateReps < ActiveRecord::Migration[5.0]
  def change
    create_table :reps do |t|
      t.string :title, null: false, default: ''
      t.string :first_name, null: false, default: ''
      t.string :last_name, null: false, default: ''
      t.string :state, null: false, default: ''
      t.string :party
      t.string :district
      t.string :phone
      t.string :url
      t.string :next_election
      t.string :twitter_account
      t.string :profile_url
      t.integer :new_articles, null: false, default: 0
      t.timestamps
    end
  end
end
