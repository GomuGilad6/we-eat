Rails.application.routes.draw do
  root 'pages#index'

  get 'restaurants' => 'restaurants#index'

  post 'reviews' => 'reviews#create'
end
