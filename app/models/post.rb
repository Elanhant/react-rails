class Post < ActiveRecord::Base
  include Rails.application.routes.url_helpers

  attr_accessor :url

  def url
    @url = post_url(self, {:only_path => true})
  end

  def url=(new_url)
  end

  def as_json(options = { })
    super((options || { }).merge({
        :methods => [:url]
    }))
end
end
