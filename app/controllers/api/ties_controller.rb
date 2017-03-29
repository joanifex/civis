class Api::TiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def update
    tie = current_user.ties.find_by(rep_id: params["id"])
    tie.update(new_articles: 0)
    head :no_content
  end
end
