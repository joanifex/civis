class AddBioToRep < ActiveRecord::Migration[5.0]
  def change
    add_column :reps, :bio, :text, default: ""
  end
end
