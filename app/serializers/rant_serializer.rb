class RantSerializer < ActiveModel::Serializer
  attributes :id, :content, :sentiment, :sentiment_score

  def sentiment
  	analyzer = Sentimental.new
    analyzer.load_defaults
    analyzer.sentiment object.content
  end

  def sentiment_score
  	analyzer = Sentimental.new
    analyzer.load_defaults
    analyzer.score object.content
  end

end
