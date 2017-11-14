get '/' do
  @all_url = Link.all
  erb :"static/index"
end


post '/geturl' do
	@new_url = Link.new(long_url: params[:user_url])
	@new_url.short_url = @new_url.shorten
	 if @new_url.save 
	# 	# { @new_url.to_json
		{ success: true, url: @new_url }.to_json
	# 	#redirect "/"
	 else 
	# 	@errors = @new_url.errors.messages
	 	@all_url = Link.all
	 	# @errors.to_json
	 	{ success: false, error: @errors}.to_json
	# 	@errors
	# 	#erb :"static/index"
	 end
end 

get '/done' do
	erb :"static/done"
end  

get'/:short_url' do 
	x = Link.find_by(short_url: params[:short_url])
	x.click_count += 1
	x.save
	redirect x.long_url
end 
