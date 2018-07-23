# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
cuisines_attrs = [
  {name: 'Asian', icon: 'I'},
  {name: 'Vegeterian', icon: '2'}
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

cuisines = Cuisine.create(cuisines_attrs)
cuisines.each.with_index do |cuisine, index|
  cuisine_id = cuisine[:id]
  restaurant_attr = restaurant_attrs[index].merge(cuisine_id: cuisine_id)
  Restaurant.create(restaurant_attr)
end
