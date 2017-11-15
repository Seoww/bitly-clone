$(document).ready(function(){
	console.log("hi")

	$("#url_form").submit(function(e){
		e.preventDefault();
		$.ajax({
			url: '/geturl',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data){
				if (data.success){
					console.log(data)
					$('#errors').empty()
					$('#url_table').append('\
					<tr>\
				    <td>' + data.url.long_url + '</td>\
				    <td>' + '<a href= "/" + "data.url.short_url" + "target="_blank">' + data.url.short_url + '</a>' + '</td>\
				    <td class="clickcount">' + data.url.click_count +'</td>\
				    ')
				} else {
					$("#errors").html('<p>'+ "your url is not valid, try something like https://www.example.com" +'</p>')
				}
			}	
		})// end of ajax
	}) // function e end

	$(".shorturl").click(function(a){
		$.ajax({
			url: '/:short_url',
			method: 'GET',
			data: $(this).serialize(),
			dataType: 'json',
			success: function(data){
				console.log("hi!!!!")
			}
		})
	})//function a end
}) //document ready end

