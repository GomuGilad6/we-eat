FactoryBot.define do
  factory :review do
    name { Faker::OnePiece.character }
    rating { Faker::Number.between(1, 5) }
    comment { Faker::OnePiece.quote }
    restaurant
  end
end
