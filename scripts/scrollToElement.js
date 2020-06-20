$(document).ready(function(){
  // Add smooth scrolling to all links
  $('#navigation a').on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      var e = event;
      // Store hash
      var hash = this.hash;
      var targetOffset = $(hash).offset().top-105;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({scrollTop: targetOffset}, 'slow', function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = "btn_"+hash ;
      });
    } // End if
  });
});
