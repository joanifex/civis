# [Civis](www.civis.herokuapp.com)

Civis makes it easy to stay informed and in touch with your legislators. After identifying your location, Civis will identify your congressional representatives from our database. Civis will give you all you need to know about your legislators by combining information from ProPublica, Wikipedia, the New York Times, Twitter, and Google. In addition, by signing up, you can receive news alerts whenever your representatives are in the news, so that you can stay informed and be a better citizen. Civis is also available as an iOS and Android native app using React Native.

Production Site: [www.civis.herokuapp.com](www.civis.herokuapp.com)
### Installing

Run Commands:
* bundle install
* yarn ( or npm install )
* bundle exec rails db:create db:migrate db:seed
* ( Enter API Keys in .env )
* bundle exec rake jobs:fetch_pictures
* bundle exec rake jobs:fetch_articles
* bundle exec rake jobs:fetch_bios
* ( Start Servers ):
  * bundle exec rails server
  * yarn dev_server  

And you're good to go!

## Running the tests

Civis has an RSpec testing suite
* rspec spec
* open coverage/index.html

## APIs
* [ProPublica](https://www.propublica.org/datastore/api/propublica-congress-api)
* [New York Times](https://developer.nytimes.com/)
* [Wikipedia](https://www.mediawiki.org/wiki/API:Main_page)
* [Twitter](https://dev.twitter.com/rest/public)
* [Google Maps](https://developers.google.com/maps/)
* [Google Civis Information](https://developers.google.com/maps/)
