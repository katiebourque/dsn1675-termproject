var $navBtn = $('.nav-button');
var $nav = ('.navigation');

var $xButton = $(.'x-button');


$navBtn.on('click', function () {
	$nav.addClass('navigation-open')
});

$navBtn.on('click', function () {
	$navBtn.addClass('nav-none');
});


