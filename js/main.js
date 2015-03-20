var $btn = $('.btn');
var $panel = $('.panel');
var $btn1 = $('.btn1');
var $text1 = $('.text1');
var $btn2 = $('.btn2');
var $text2 = $('.text2');
var $btn3 = $('.btn3');
var $text3 = $('.text3')

$btn.on('click', function () {
	$panel.toggleClass ('panel-open')
});

$btn1.on('click', function () {
	$text1.toggleClass ('text1-open')
});

$btn2.on('click', function () {
	$text2.toggleClass ('text2-open')
});

$btn3.on('click', function () {
	$text3.toggleClass ('text3-open')
});