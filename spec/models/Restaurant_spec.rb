require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  before(:all) do
    @restaurant = build(:restaurant)
  end

  context 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:cuisine_id) }
    it { should validate_presence_of(:coordinates) }
    it { should validate_presence_of(:max_delivery_time) }
  end
end
