Rails.application.routes.draw do
  root 'pages#index'

  get 'restaurants' => 'restaurants#index'
end
