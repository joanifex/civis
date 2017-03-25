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
end
