$(document).ready(function(){
  $('.scroll').on('click',function(e) {
  	e.preventDefault();
  	var offset = 0;
  	var target = this.hash;
    console.log(target);
  	if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    console.log($(target).offset());
    $('html, body').stop().animate({
  		'scrollTop': $(target).offset().top - offset
  	}, 500, 'swing', function() {
  		//window.location.hash = target;
  	});
  });
  $('.jump').on('click',function(e) {
    e.preventDefault();
    var offset = 0;
    var target = this.getAttribute("href");
    console.log(target);
    if ($(this).data('offset') != undefined) offset = $(this).data('offset');
    $('html, body').stop().animate({
      'scrollTop': $(target).offset().top - offset
    }, 500, 'swing', function() {
      window.location.hash = target;
    });
  });

});
