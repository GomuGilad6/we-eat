# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
cuisine_attrs = [
  { name: 'Asian', icon: 'I' },
  { name: 'Vegeterian', icon: '2' }
]

restaurant_attrs = [
  {
    name: 'Oban Koban',
    rating: 3,
    accepts_10bis: true,
    address: 'Ibn Gavirol 53, Tel Aviv',
    coordinates: {
      lat: 30.0,
      lng: 30.0
    },
    max_delivery_time: 60
  },
  {
    name: 'Pepper Amsterdam',
    rating: 3,
    accepts_10bis: true,
    address: 'Nehalat Izhak 102, Tel Aviv',
    coordinates: {
      lat: 50.0,
      lng: 60.0
    },
    max_delivery_time: 65
  }
]

review_attrs = [
  {
    name: 'Monkey D Luffy',
    rating: 3,
    comment: 'Awesome restaurant! Really amazing food, I want more'
  },
  {
    name: 'Roronoa Zoro',
    rating: 2,
    comment: 'Well, I guess the food was pretty good'
  }
]

cuisines = Cuisine.create(cuisine_attrs)
cuisines.each.with_index do |cuisine, index|
  restaurant_attr = restaurant_attrs[index]
  restaurant = cuisine.restaurants.build(restaurant_attr)
  restaurant.save
  review_attr = review_attrs[index]
  review = restaurant.reviews.build(review_attr)
  review.save
end
