class ReviewsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    restaurant = Restaurant.find(params[:review][:restaurant_id])
    review = restaurant.reviews.create(review_params)
    render json: review
  rescue ActiveRecord::RecordNotFound => e
    render json: {
      error: e.to_s
    }, status: :not_found
  end

  private

  def review_params
    params.require(:review).permit(:name, :rating, :comment)
  end
end
