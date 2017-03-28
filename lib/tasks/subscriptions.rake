namespace :subscriptions do
  desc "Adds new rep article count to subscriptions"
  task update_subscriptions: :environment do
    subscriptions = Tie.where(subscription: true)
    subscriptions.each do |subscription|
      new_articles = subscription.rep.new_articles
      if new_articles > 0
        unread_articles = subscription.new_articles
        subscription.update( new_articles: unread_articles + new_articles )
      end
      user = subscription.user
      rep = subscription.rep
      puts "Found #{new_articles} New Articles about #{rep.full_name} for #{user.full_name}."
    end
  end
end
