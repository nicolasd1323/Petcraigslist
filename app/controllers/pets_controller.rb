class PetsController < ApplicationController
  before_action :set_pet, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /pets
  def index
    @pets = Pet.all

    render json: @pets
  end

  # GET /pets/1
  def show
    render json: @pet
  end

  # POST /pets
  def create
    @pet = Pet.new(pet_params)
    @pet.user = @current_user

    if @pet.save
      render json: @pet, status: :created
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /pets/1
  def update
    if @pet.update(pet_params)
      render json: @pet
    else
      render json: @pet.errors, status: :unprocessable_entity
    end
  end

   # PUT /comments/1/pets/1
  #  def add_comment
  #   @comment = Comment.find(params[:comment_id])
  #   # @food = Food.find(params[:id])

  #   @comment.pets << @pet
  #   # @comment.pets.push(@pet)
  #   # ==== OR ====
  #   # @pet.comments << @comment
  #   render json: @pet, include: :comments
  #   end
  # DELETE /pets/1
  def destroy
    @pet.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pet
      @pet = Pet.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def pet_params
      params.require(:pet).permit(:name, :image, :description, :age)
    end
end
