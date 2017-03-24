namespace :jobs do
  desc "Fetch All News Articles For Reps"
  task fetch_articles: :environment do
      Rep.find_each do |rep|
        t = Thread.new do
          rep.fetch_articles
        end
        t.join
      end
  end
end
