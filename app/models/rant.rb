class Rant < ApplicationRecord
	validates :score, numericality: {greater_than_or_equal_to: 0}
end
