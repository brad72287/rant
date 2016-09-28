class RantSerializer < ActiveModel::Serializer
  attributes :id, :content, :bla

  def bla
  	'hello'
  end
end
