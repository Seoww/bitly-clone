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
					$('#url_table').append('\
					<tr>\
				    <td>' + data.long_url + '</td>\
				    <td>' + data.short_url + '</td>\
				    <td>' + data.click_count +'</td>\
				    ')
				} else {
					$("#errors").append('<p>'+ "your url is not valid, try something like https://www.example.com" +'</p>')
				}
				}// end of success
			})
		})// end of ajax
	}) // function e end
//document ready end
