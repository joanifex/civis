class Api::TiesController < ApplicationController
  def update
    tie = current_user.ties.find_by(rep_id: params["id"])
    tie.update(new_articles: 0)
    head :no_content
  end
end
