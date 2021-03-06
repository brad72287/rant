class RantSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :sentiment, :sentiment_score, :score

  @@analyzer = Sentimental.new
  @@analyzer.load_defaults

  def sentiment
  	# analyzer = Sentimental.new
   #  analyzer.load_defaults
    @@analyzer.sentiment object.content
  end

  def sentiment_score
  	# analyzer = Sentimental.new
   #  analyzer.load_defaults
    @@analyzer.score object.content
  end

end
