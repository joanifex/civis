namespace :subscriptions do
  desc "Adds new rep article count to subscriptions"
  task update_subscriptions: :environment do
    Tie.find_each do |tie|
      new_articles = tie.rep.new_articles
      if new_articles > 0
        unread_articles = tie.new_articles
        articles = unread_articles + new_articles
        articles = 10 if articles > 10
        tie.update( new_articles: articles )
      end
      user = tie.user
      rep = tie.rep
      puts "Found #{new_articles} New Articles about #{rep.full_name} for #{user.full_name}."
    end
  end
end
