class AddInfoToUser < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :first_name, :string, null: false
    add_column :users, :last_name, :string, null: false
    add_column :users, :zipcode, :string
    #QUESTION: Zipcode string or integer ? 
  end
end
