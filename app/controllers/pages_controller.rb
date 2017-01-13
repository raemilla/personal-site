class PagesController < ApplicationController
  def index
    @posts = Post.all.order('created_at DESC').as_json
  end
end
