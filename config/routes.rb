Rails.application.routes.draw do
  root 'home#index'

  # DEVISE ROUTES
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }

  # API ROUTES
  namespace :api do
    get 'logged_in_user', to: 'users#logged_in_user'
    get 'zipcode' ,to: 'users#zipcode'
    get 'user_reps', to: 'users#user_reps'
    patch 'user/zipcode', to: 'users#update_zipcode'
  end

  # NO ROUTES BELOW THIS LINE -- React Router
  get '*unmatched_route', to: 'home#index'

end
