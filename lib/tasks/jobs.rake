namespace :jobs do
  desc "Fetch All News Articles For Reps"
  task fetch_articles: :environment do
    Rep.all.each { |rep| rep.fetch_articles }
  end
end
