require 'rails_helper'

RSpec.describe Review, type: :model do
  before(:all) do
    @review = build(:review)
  end

  context 'validations' do
    it { should validate_presence_of(:name) }
    it { should validate_presence_of(:rating) }
    it { should validate_presence_of(:comment) }
    it { should validate_presence_of(:restaurant_id) }
  end

  context 'rating' do
    it { should validate_numericality_of(:rating).is_greater_than(0) }
    it { should validate_numericality_of(:rating).is_less_than_or_equal_to(5) }

    it 'is not valid with a negative rating' do
      invalid_review = build(:review, rating: -1)
      expect(invalid_review).to_not be_valid
    end

    it 'is not valid with a rating that is greater than 5' do
      invalid_review = build(:review, rating: 6)
      expect(invalid_review).to_not be_valid
    end
  end
end
