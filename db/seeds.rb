# frozen_string_literal: true

require 'json'
require_relative './migrate/helpers/get_cuisine_icon'

cuisine_to_icon_hash = GetCuisineIcon.cuisine_to_icon_hash
accepts_10bis_values = [false, true]

MIN_DELIVERY_TIME = 30
MAX_DELIVERY_TIME = 120

zomato_base_url, zomato_new_york_id =
  ENV.values_at('ZOMATO_BASE_URL', 'ZOMATO_NEW_YORK_ID')
conn = Faraday.new(url: zomato_base_url)

def fetch_data(conn, url, field)
  zomato_api_key = ENV['ZOMATO_API_KEY']
  response = conn.get do |req|
    req.url url
    req.headers['user-key'] = zomato_api_key
    req.headers['accepts'] = 'application/json'
  end
  json_response = JSON.parse(response.body)
  json_response[field]
end

def fetch_multiple(conn, url, field, num_of_pages)
  num_of_results = 0
  results = []
  num_of_pages.times do
    url_with_count = url + "&start=#{num_of_results}"
    result = fetch_data(conn, url_with_count, field)
    results.push(*result)
    num_of_results += result.length
  end
  results
end

# Fetch all cuisines of New York City
cuisines_url = "cuisines?city_id=#{zomato_new_york_id}"
cuisines_result = fetch_data(conn, cuisines_url, 'cuisines')
cuisines = cuisines_result.map do |cuisine|
  cuisine_id,
  cuisine_name = cuisine['cuisine']
                 .values_at('cuisine_id', 'cuisine_name')
  cuisine_icon = cuisine_to_icon_hash[cuisine_name.to_sym] || '🍟'
  { id: cuisine_id, name: cuisine_name, icon: cuisine_icon }
end

Cuisine.create cuisines

# Create mapping between cuisine name and cuisine id
name_to_id_cuisine_hash = cuisines.each_with_object({}) do |cuisine, acc|
  acc[cuisine[:name]] = cuisine[:id]
  acc
end

# Fetch [num_of_pages * 20] restaurants
restaurants_url = "search?entity_type=city&entity_id=#{zomato_new_york_id}"
num_of_restaurant_pages = 5
restaurants_result =
  fetch_multiple(conn, restaurants_url, 'restaurants', num_of_restaurant_pages)
restaurants = restaurants_result.map do |restaurant|
  id,
  name,
  cuisines,
  location = restaurant['restaurant']
             .values_at('id', 'name', 'cuisines', 'location')
  cuisine = cuisines.split(',')[0]
  address, lat, lng = location.values_at('address', 'latitude', 'longitude')
  {
    id: id,
    name: name,
    cuisine_id: name_to_id_cuisine_hash[cuisine],
    accepts_10bis: accepts_10bis_values[Random.rand(2)],
    address: address,
    coordinates: {
      lat: lat.to_f,
      lng: lng.to_f
    },
    max_delivery_time: Random.rand(MIN_DELIVERY_TIME..MAX_DELIVERY_TIME)
  }
end

Restaurant.create restaurants

all_reviews = []
restaurants.each do |restaurant|
  restaurant_id = restaurant[:id]
  reviews_url = "reviews?res_id=#{restaurant_id}"
  reviews_result = fetch_data(conn, reviews_url, 'user_reviews')
  filtered_reviews = reviews_result[0..Random.rand(5)]
  reviews = filtered_reviews.map do |review|
    user,
    rating,
    review_text = review['review']
                  .values_at('user', 'rating', 'review_text')
    {
      name: user['name'],
      rating: rating,
      comment: review_text,
      restaurant_id: restaurant_id
    }
  end
  all_reviews.push(*reviews)
end

Review.create all_reviews
