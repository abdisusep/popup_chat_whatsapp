$(document).ready(function() {

	$('#open').click(function() {
		$(this).addClass("d-none");
		$('#form').removeClass("d-none");
		});

	$('#close').click(function() {
		$('#open').removeClass("d-none");
		$('#form').addClass("d-none");
		});

	$('#send').click(function() {
		var msg = $("#message").val()
		if (msg != "") {
			$(location).attr('href',' https://wa.me/6285321613063?text='+msg);				
		}
		});
	});