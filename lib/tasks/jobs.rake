namespace :jobs do
  desc "Fetch All News Articles For Reps"
  task fetch_articles: :environment do
    Rep.find_each { |rep| rep.fetch_articles }
  end

  desc "Seed Fake News Articles"
  # TODO: refactor to be only in development?
  task fake_news: :environment do
    Rep.find_each do |rep|
      begin
        3.times do
          rep.articles.create(
            web_url: "https://www.google.com",
            snippet: Faker::Hipster.paragraph,
            pub_date: Faker::Date.backward(23),
            headline: "FAKE NEWS!",
            lead_paragraph: Faker::Hipster.paragraph
          )
        end
        puts "Created Fake News for #{rep.full_name}."
      rescue => e
        puts e
        puts "Could Not Create Fake New for #{rep.full_name}"
      end
    end
  end

  desc "Grabs Reps Picture Urls"
  task fetch_rep_pictures: :environment do
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key = ENV['TWITTER_API_KEY']
      config.consumer_secret = ENV['TWITTER_SECRET']
    end

    Rep.find_each do |rep|
      if rep.profile_url.nil?
        profile_url = @client.user(rep.twitter_account).profile_image_url.to_s
        rep.update(profile_url: profile_url)
      end
    end
  end
end
