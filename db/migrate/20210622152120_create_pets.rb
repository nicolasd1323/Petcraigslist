class CreatePets < ActiveRecord::Migration[6.1]
  def change
    create_table :pets do |t|
      t.text :name
      t.string :image
      t.string :description
      t.integer :age
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
