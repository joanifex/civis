require 'rails_helper'

RSpec.describe Article, type: :model do
  describe "attributes" do
    it { should respond_to(:web_url) }
    it { should respond_to(:snippet) }
    it { should respond_to(:pub_date) }
    it { should respond_to(:headline) }
    it { should respond_to(:lead_paragraph) }

 end

  describe 'validations' do
    it { should validate_presence_of(:web_url) }
    it { should validate_presence_of(:snippet) }
    it { should validate_presence_of(:pub_date) }
    it { should validate_presence_of(:headline) }
    it { should validate_presence_of(:lead_paragraph) }
  end

  describe 'associations' do
    it { belong_to(:rep)}
  end

  describe 'instance methods' do
    before(:each) do
      @article = FactoryGirl.create(:article)
    end

    it 'reformats the date' do
      expect(@article.formatted_pub_date).to eq("Wed, 22 Mar 2017")
    end 

    it 'formats snippet' do
      expect(@article.formatted_snippet).to eq("")
    end
    
  end 
end
