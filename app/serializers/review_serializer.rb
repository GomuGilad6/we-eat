# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  name          :string
#  rating        :integer          default(0)
#  comment       :text
#  restaurant_id :bigint(8)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :comment, :restaurant_id
end
