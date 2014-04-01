# qt.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
	erb :about
end

post '/getfile' do
  content_type 'application/xml'
  text = params[:xmlresults]
end

post '/getdc' do
  "Submit DC to Database."
end