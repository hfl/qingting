# qt.rb
require 'sinatra'

get '/' do
  erb :index
end

get '/about' do
	erb :about
end

post '/getfile' do
#	File.open('public/file.txt', 'w') do |f|
#    f.write params[:xmlresults]
#    redirect to '/file.txt'
#  end
  content_type 'application/octet-stream'
  text = params[:xmlresults]


end