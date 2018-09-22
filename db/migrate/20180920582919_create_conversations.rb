class CreateConversations < ActiveRecord::Migration[5.1]
  def change
    create_table :conversations do |t|
      t.string :title
      t.integer :group_id


      t.timestamps
    end
  end
end
