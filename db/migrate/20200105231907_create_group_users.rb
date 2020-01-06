class CreateGroupUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :group_users do |t|
      t.timestamps
      t.references :group_id, foreign_key: true
      t.references :user_id, foreign_key: true
    end
  end
end
