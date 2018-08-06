FactoryBot.define do
  factory :cuisine do
    name { Faker::Food.dish }
    icon '🥦'
  end
end
