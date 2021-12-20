$(document).ready(function() {
  // preload the image for each link
  // set up the event handlers for each link
  // get the image URL and caption for each image and animate the caption
  // cancel the default action of each link
  // move the focus to the first link

  $('#image_list a').on('click', function(e){
    // preventing redirection
    e.preventDefault();
    // get link element
    var link = e.target.tagName == 'a' ? $(e.target) : $(e.target).closest('a');
    // exit if the image is already active/fade stage
    if(link.hasClass('active') || link.hasClass('fade')) return;
    // add fade class to all links
    $('#image_list a').addClass('fade');
    // remove active classes from all links
    $('#image_list a').removeClass('active');
    // add active class to the clicked link
    link.addClass('active');
    // fade out caption
    $('#caption').fadeOut(3000, function(){
      // set font-size to 1em again
      $('#caption').animate({
        'font-size': '120%'
      });
      // set new caption
      $('#caption').text(link.attr('title'));
      // fade in new caption
      $('#caption').fadeIn(3000, function(){
        // increase font-size with animate
        $('#caption').animate({
          'font-size': '2em'
        }, 3000);
        // remove fade class from all links
        $('#image_list a').removeClass('fade');
      });
    });
    // fade out image
    $('#image').fadeOut(3000, function(){
      // set new image
      $('#image').attr('src', link.attr('href'));
      // fade in new image
      $('#image').fadeIn(3000);
    });
  });
}); // end ready