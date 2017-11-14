class Link < ActiveRecord::Base

	validates_format_of :long_url, :with => /https?:\/\/[\S]+/, :message => "your url is invalid"
 

	def shorten 
		ary = []
		ary << ("a".."z").to_a
		ary << ("A"..."Z").to_a
		ary << (0..9).to_a
		random = ary.flatten.sample(6).join
	end 
	
end 