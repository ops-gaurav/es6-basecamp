
$('.app-body').css ('margin-top', '100px');
$('.loader-container-screen').css ('display', 'block');
var alignLoader = function () {
	var xpos = ($(window).width() - $('.loader').width())/2;
	var ypos = ($(window).height() - $('.loader').height())/2 - 50;

	$('.loader').css ('margin-left', xpos+'px');
	$('.loader').css ('margin-top', ypos+'px');
}

alignLoader();

$(document).ready (function (){
	// alert ('done loading');
	$('.loader-container-screen').animate ({
		'opacity': 0
	}, 500, function () {
		$('.loader-container-screen').css ('display', 'none');
	});
});