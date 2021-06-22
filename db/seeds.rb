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


@pet = Pet.create!(name: 'paco', image: 'https://images.unsplash.com/photo-1618760439335-0fe149f356ce?ixid=MnwxMjA3fDB8MHxzZWFy[…]fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60', description: 'super friendly', age: 1,  user: @user)

puts "#{Pet.count} pets created"

@comment = Comment.create!(content: 'I am interested in this puppy, here is my phone 345678. call me', user: @userr,  pet: @pet )
puts "#{Comment.count} comments created"

