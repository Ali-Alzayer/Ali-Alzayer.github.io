$(document).ready(function(){
 $.ajax({
     type:'GET',
    url:'facultyList.json',
    dataType: 'json',
    success: function(data) {
       $.each(data, function(key ,value){
           for (var i=0; i<value.length; i++) {
              var row = $('<img src='+value[i].image+'><h2>' + value[i].full_name+ '</h2><h3>'+value[i].department+'</h3><p>'+value[i].bio+'</p>');
            $('#faculty').append(row);
            // console.log(value[i]);
        } 
       })
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
});
});
