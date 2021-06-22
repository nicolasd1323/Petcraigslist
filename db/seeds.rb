# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Pet.destroy_all
Comment.destroy_all


@user = User.create!(username: 'Nico', email: 'nicolasd1323@gmail.com', password: '123456')
@userr = User.create!(username: 'Lindsay', email: 'lindsay@gmail.com', password: '123456')
@user2 = User.create!(username: 'John', email: 'john@gmail.com', password: '123456')
@user3 = User.create!(username: 'Ginna', email: 'ginna@gmail.com', password: '123456')
@user4 = User.create!(username: 'Fer', email: 'fer@gmail.com', password: '123456')

puts "#{User.count} users created"


@pet = Pet.create!(name: 'Paco', image: 'https://images.unsplash.com/photo-1618760439335-0fe149f356ce?ixid=MnwxMjA3fDB8MHxzZWFy[…]fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'super friendly', age: 1,  user: @user)
@pet1 = Pet.create!(name: 'Amber', image: 'https://images.unsplash.com/photo-1610726264625-575c36573342?ixid=MnwxMjA3fDB8MHxzZWFy[…]ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Loves to snuggle', age: 5,  user: @user)
@pet2 = Pet.create!(name: 'Chili', image: 'https://images.unsplash.com/photo-1610112645245-36020fc0e128?ixid=MnwxMjA3fDB8MHxzZWFy[…]fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'Lazy', age: 1,  user: @user2)
@pet3 = Pet.create!(name: 'Rocco', image: 'https://images.unsplash.com/photo-1562714476-2e539d767a5e?ixid=MnwxMjA3fDB8MHxzZWFyY2h[…]wwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60', description: 'mister I love to eat', age: 3,  user: @user2)


puts "#{Pet.count} pets created"

@comment = Comment.create!(content: 'I am interested in this puppy, here is my phone number is 34554678. call me', user: @userr,  pet: @pet )
@comment1 = Comment.create!(content: 'I want her!!! e-mail me lindsay@gmail.com', user: @userr,  pet: @pet1 )
@comment2 = Comment.create!(content: 'I am interested, he is so cute! text me 345678902', user: @user3,  pet: @pet2 )
@comment3 = Comment.create!(content: 'I wish I could have him', user: @user4,  pet: @pet3 )
@comment4 = Comment.create!(content: 'Lovely', user: @user4,  pet: @pet2 )
@comment5 = Comment.create!(content: 'adorable', user: @user2,  pet: @pet1 )


puts "#{Comment.count} comments created"

