# == Schema Information
#
# Table name: restaurants
#
#  id                :bigint(8)        not null, primary key
#  name              :string
#  cuisine_id        :bigint(8)
#  rating            :integer
#  accepts_10bis     :boolean
#  address           :string
#  coordinates       :json
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class RestaurantSerializer < ActiveModel::Serializer
  attributes :name, :rating, :accepts_10bis, :address, :coordinates,
             :max_delivery_time

  belongs_to :cuisine
end
