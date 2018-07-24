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

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
