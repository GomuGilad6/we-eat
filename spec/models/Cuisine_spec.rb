require 'rails_helper'

RSpec.describe Cuisine, type: :model do
  before(:all) do
    @cuisine = build(:cuisine)
  end

  it { should validate_presence_of(:name) }
  it { should validate_presence_of(:icon) }
end