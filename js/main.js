var $btn = $('.btn');
var $panel = $('.panel');
var $btn1 =('.btn1');
var $expanded = $('.expanded');


$btn.on('click', function () {
	$panel.toggleClass ('panel-open')
});

$btn1.on('click', function () {
	$expanded.toggleClass ('expanded-p')
});


