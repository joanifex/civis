namespace :jobs do
  desc "Fetch All News Articles For Reps"
  task fetch_articles: :environment do
    Rep.find_each do |rep|
      url = "https://api.nytimes.com/svc/search/v2/articlesearch.json"
      # TODO: Improve this query. Gets back any article with a matching name.
      params = {
        "api-key" => ENV["NYT_API_KEY"],
        "q" => "\"#{rep.full_name}\"",
        "sort" => "newest",
        "fl" => "web_url,pub_date,headline,lead_paragraph",
        "hl" => "true"
      }
      # TODO: refactor with HTTParty
      begin
        retries ||= 0
        response = HTTP.get(url, params: params).to_s
        parsed = JSON.parse(response)
        articles = parsed["response"]["docs"]
        articles.each do |article|
          rep.articles.create(
            web_url: article["web_url"],
            snippet: article["snippet"],
            pub_date: article["pub_date"],
            headline: article["headline"]["main"],
            lead_paragraph: article["lead_paragraph"]
          )
        end
        puts "Created Articles for #{rep.full_name}"
      rescue => e
        retry if (retries += 1) < 5
        puts "Could not make articles for #{rep.full_name}"
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
        begin
          profile_url = @client.user(rep.twitter_account).profile_image_url.to_s
          rep.update(profile_url: profile_url)
          puts "Found picture for #{rep.full_name}."
        rescue => e
          puts "Could not find picture for #{rep.full_name}."
        end
      else
        puts "Already have picture for #{rep.full_name}."
      end
    end
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
end
