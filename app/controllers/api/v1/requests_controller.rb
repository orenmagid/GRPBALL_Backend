class Api::V1::RequestsController < ApplicationController

  before_action :find_request, only: [:show, :update, :destroy]

   def index
     @requests = Request.all
     render json: @requests
   end


    def show
      render json: @request
    end

    def create
      @request = Request.new(request_params)
      if @request.save
        render json: @request, status: :accepted
      else
        render json: { errors: @request.errors.full_messages }, status: :unprocessible_entity
      end
    end

   def update
     @request.update(request_params)
     if @request.save
       render json: @request, status: :accepted
     else
       render json: { errors: @request.errors.full_messages }, status: :unprocessible_entity
     end
   end

   def destroy
    @request.destroy


  end

   private

   def request_params
     params.require(:request).permit(:id, :user_id, :group_id, :status)
   end

   def find_request
     @request = Request.find(params[:id])
   end
end
