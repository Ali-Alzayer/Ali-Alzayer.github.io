$(document).ready(function() {
  $.ajax({
     type:'GET',
    url: 'team.json',
    beforeSend: function() {
            $("#team").html("Loading...");
        },
     timeout: 5000,
     error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
    dataType: 'json',
    success: function(data) {
     $("#team").html("");
       $.each(data, function(key ,value){
        
           for (var i=0; i<value.length; i++) {
              var row = $('<h3>' + value[i].name+ '</h3><br>' + value[i].title + '<br>' + value[i].bio+'<br>');
            $('#team').append(row);
            // console.log(value[i]);
        } 
       })
        
       
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
});



