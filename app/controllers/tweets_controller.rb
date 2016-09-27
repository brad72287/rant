class TweetsController < ApplicationController

	def index
		tweets = Tweet.all
		render json: tweets
	end

	def show
		tweet = Tweet.find_by(params[:id])
		render json: tweet
	end

	def create
		tweet = Tweet.new(tweet_params)
		if tweet.save
			render json: tweet
		else
			render json: {errors: tweet.errors.full_messages}, status: :unprocessable_entity
		end
	end

	def destroy
		tweet = Tweet.find_by(params[:id])
		tweet.destroy
	end

	def update
		tweet = Tweet.find_by(params[:id])
		if tweet.update(tweet_params)
			render json: tweet
		else
			render json: {errors: tweet.errors.full_messages}, status: :unprocessable_entity
		end
	end

	private

	def tweet_params
		params.require(:tweet).permit(:content)
	end
end