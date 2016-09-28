class RantsController < ApplicationController

	def index
		rants = Rant.all
		render json: rants
	end

	def show
		rant = Rant.find_by(params[:id])
		render json: rant
	end

	def create
		rant = Rant.new(rant_params)
		if rant.save
			render json: rant
		else
			render json: {errors: rant.errors.full_messages}, status: :unprocessable_entity
		end
	end

	def destroy
		rant = Rant.find_by(params[:id])
		rant.destroy
	end

	def update
		rant = Rant.find_by(params[:id])
		if rant.update(rant_params)
			render json: rant
		else
			render json: {errors: rant.errors.full_messages}, status: :unprocessable_entity
		end
	end

	private

	def rant_params
		params.require(:rant).permit(:content, :title)
	end
end