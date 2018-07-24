class CreateCuisines < ActiveRecord::Migration[5.2]
  def change
    create_table :cuisines do |t|
      t.string :name, unique: true
      t.string :icon

      t.timestamps
    end
  end
end
