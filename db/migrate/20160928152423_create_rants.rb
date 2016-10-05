class CreateRants < ActiveRecord::Migration[5.0]
  def change
    create_table :rants do |t|
      t.text :content
      t.text :title
      t.integer :score, default: 0
      t.timestamps
    end
  end
end
