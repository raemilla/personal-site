class CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.save

    @post = Post.find(@comment.post_id)

    redirect_to @post
  end

  # without having current users is this necessary?
  # def update
  # end
  #
  # def destroy
  # end

  private
    def comment_params
      params.require(:comment).permit(:author, :text, :post_id)
    end

end
