Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  get '/pets', to: 'pets#index'
  get '/pets/comments', to: 'comments#index'
  post '/pet/:id/comments', to: 'comments#create'

  # get '/comments', to: 'comments#index'
  resources :users, only: :create
  resources :pets do 
    resources :comments
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
