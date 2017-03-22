namespace :jobs do
  desc "Fetch All News Articles For Reps"
  task fetch_news: :environment do
    # grab all reps out of the database
    # make the api call for each of them to grab latest 10 articles
    # rep has many articles - save articles in your database
    # continue looping to make api calls for each rep
    # bundle exec rake jobs:fetch_news
    # heroku scheduler addon
  end
end
