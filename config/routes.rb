Rails.application.routes.draw do
  root 'home#index'

  # DEVISE ROUTES
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations',
  }

  # API ROUTES
  namespace :api do
    get 'logged_in_user', to: 'users#logged_in_user'
    get 'user_reps', to: 'users#user_reps'
    patch 'user/address', to: 'users#update_address'
    put 'user_update', to: 'users#update_user'
    get 'show_user', to: 'users#show_user'
    delete 'delete_user/:id', to: 'users#destroy'
  end

  # NO ROUTES BELOW THIS LINE -- React Router
  get '*unmatched_route', to: 'home#index'

end
