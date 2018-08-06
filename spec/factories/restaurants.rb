FactoryBot.define do
  factory :restaurant do
    name { Faker::DragonBall.character }
    cuisine
    accepts_10bis { Faker::Boolean.boolean }
    address { Faker::Address.full_address }
    coordinates { { lat: 50.00, lng: 50.00 } }
    max_delivery_time { Faker::Number.between(30, 120) }
  end
end
