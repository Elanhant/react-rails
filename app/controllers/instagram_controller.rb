class InstagramController < ApplicationController
  def recent
    @instagram = Instagram.user_recent_media("254966636", {:count => 3})    
  end
end