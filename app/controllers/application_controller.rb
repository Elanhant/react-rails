class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_filter :get_menu


  private

  def get_menu
    @menu_links = [
      {title: 'Main Page', url: posts_path},
      {title: 'Music', url: posts_path},
      {title: 'Literature', url: posts_path},
      {title: 'Work', url: posts_path},
    ]
  end
end
