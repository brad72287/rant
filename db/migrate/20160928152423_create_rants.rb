class CreateRants < ActiveRecord::Migration[5.0]
  def change
    create_table :rants do |t|
      t.text :content

      t.timestamps
    end
  end
end
