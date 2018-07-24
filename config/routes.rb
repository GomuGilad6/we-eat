Rails.application.routes.draw do
  resources :restaurants, only: :index
  resources :reviews, only: :create

  root 'pages#index'
end
