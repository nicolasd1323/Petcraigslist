class CommentsController < ApplicationController
  before_action :set_comment, only: [:index, :show, :update, :destroy]
  before_action :authorize_request, only: [:create, :destroy]
  # GET /comments
  def index
    @comments = Comment.all

    render json: @comments
  end

 
  # POST /comments
  def create
    @pet = Pet.find(params[:pet_id])
    @comment = Comment.where(pet_id: @pet.id).new(comment_params)
    @comment.user = @current_user

    if @comment.save
      render json: @comment, status: :created
    else
      render json: @comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  # def update
  #   if @comment.update(comment_params)
  #     render json: @comment
  #   else
  #     render json: @comment.errors, status: :unprocessable_entity
  #   end
  # end

  # DELETE /comments/1
  def destroy
    @comment.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comment
      @comment = Comment.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:content, :user_id, :pet_id)
    end
end
