class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :get_menu, :get_instagram


  private

  def get_menu
    @menu_links = [
      {title: 'Main Page', url: posts_path},
      {title: 'Music', url: posts_path},
      {title: 'Literature', url: posts_path},
      {title: 'Work', url: posts_path},
    ]
  end

  def get_instagram
    data = Instagram.user_recent_media("254966636", {:count => 3})
    instagram = []
    data.each do |media|
      instagram.push({
        :id => media.id,
        :image => media.images.low_resolution,
        :thumbnail => media.images.thumbnail,
      })
    end
    @instagram = instagram
  end
end
