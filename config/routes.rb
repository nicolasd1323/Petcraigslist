Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/pets', to: 'pets#index'
  # post '/pets/:pet_id/comments/:id', to: 'pets#add_comment'
  get '/pets/comments', to: 'comments#index'
  put '/comments/:comment_id/pets/:id', to: 'pets#add_comment'
  # get '/pets/:pet_id/comments', to: 'comments#show'
  # post '/pet/:pet_id/comments', to: 'comments#create'
  post '/pets/new', to: 'pets#create'
  # get '/comments', to: 'comments#index'
  resources :users, only: :create
  resources :pets 
  # resources :comments
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
