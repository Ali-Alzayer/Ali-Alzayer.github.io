$(document).ready(function(){
  // params for the api
  var userId = '82407828@N07';
  var tags = 'vectacorpbuilding';
  var format = 'json';
  var jsonCallback = '?';

  // build flickr api url
  var flickrApiPoint = `https://api.flickr.com/services/feeds/photos_public.gne?id=${userId}&tags=${tags}&format=${format}&jsoncallback=${jsonCallback}`;

  try {
    $.ajax({
      url: flickrApiPoint,
      dataType: 'jsonp',
      data: {format: "json"},
      success: function (data) {
        $.each(data.items, function(idx, item){
          $('#new_building').append(`<a href="${item.media.m}" data-title="${item.title}" data-lightbox="${idx}">
            <img src="${item.media.m}" alt="${item.title}"/>
          </a>`);
        });
      }
    });
  }
  catch (e) {
    console.log(e);
  }
});