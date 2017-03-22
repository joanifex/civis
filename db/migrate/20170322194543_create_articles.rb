class CreateArticles < ActiveRecord::Migration[5.0]
  def change
    create_table :articles do |t|
      t.string :web_url, null: false
      t.string :snippet, null: false
      t.datetime :pub_date, null: false
      t.string :headline, null: false
      t.string :lead_paragraph, null: false
      t.belongs_to :rep, foreign_key: true

      t.timestamps
    end
  end
end
