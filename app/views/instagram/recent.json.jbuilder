json.array!(@instagram) do |post|
  json.extract! post, :id
  json.image post.images.low_resolution
  json.thumbnail post.images.thumbnail
end
