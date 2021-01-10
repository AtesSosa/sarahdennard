$(document).ready(function(){
  $('.toggleText').on('click',function(e) {
  	e.preventDefault();

    var toggleText = $(this).parent().siblings(".invisible-div");
    var toggleIcon = $(this).siblings("button");
    toggleText.slideToggle();
    $(this).toggle();
    toggleIcon.toggle();

  });
});
