$(document).ready(function(){
	console.log("hi")

	$("#url_form").submit(function(e){
		e.preventDefault();
		// console.log("hi")
		// console.log($(this));
		// console.log($(this).serialize())
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
				    <td>' + '<a href= data.url.short_url target="_blank">' + data.url.short_url + '</a>' + '</td>\
				    <td>' + data.url.click_count +'</td>\
				    ')
				} else {
					$("#errors").html('<p>'+ "your url is not valid, try something like https://www.example.com" +'</p>')
				}
				}	
			})
		})// end of ajax
	}) // function e end
//document ready end
