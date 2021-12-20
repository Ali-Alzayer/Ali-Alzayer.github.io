$(document).ready(function() {
	$('.Jeffrey_Toobin').click(function(e){
        e.preventDefault();
        $.ajax({
type:'POST',
    url:'json_files/toobin.json',
     dataType:'json',
    success: function(data) {
     $("#result").html("");
       $.each(data, function(key ,value){
           for (var i=0; i<value.length; i++) {
              var row = $('<h1>' + value[i].title+ '</h1><h2>'+value[i].month+'</h2><h3>'+value[i].speaker+'</h3><img src='+value[i].image+'><p>'+value[i].text+'</p>');
            $('#result').append(row);
            // console.log(value[i]);
        } 
       })
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
        })
	
	})

	
}); // end ready

$(document).ready(function(){
     $('.Ross_Sorkin').click(function(e){
        e.preventDefault();
        $.ajax({
type:'POST',
    url:'json_files/sorkin.json',
     dataType:'json',
    success: function(data) {
     $("#result").html("");
       $.each(data, function(key ,value){
           for (var i=0; i<value.length; i++) {
              var row = $('<h1>' + value[i].title+ '</h1><h2>'+value[i].month+'</h2><h3>'+value[i].speaker+'</h3><img src='+value[i].image+'><p>'+value[i].text+'</p>');
            $('#result').append(row);
            // console.log(value[i]);
        } 
       })
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
        })
    
    })

})
$(document).ready(function(){
     $('.chua').click(function(e){
        e.preventDefault();
        $.ajax({
type:'POST',
    url:'json_files/chua.json',
     dataType:'json',
    success: function(data) {
     $("#result").html("");
       $.each(data, function(key ,value){
           for (var i=0; i<value.length; i++) {
              var row = $('<h1>' + value[i].title+ '</h1><h2>'+value[i].month+'</h2><h3>'+value[i].speaker+'</h3><img src='+value[i].image+'><p>'+value[i].text+'</p>');
            $('#result').append(row);
            // console.log(value[i]);
        } 
       })
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
        })
    
    })

})

$(document).ready(function(){
     $('.sampson').click(function(e){
        e.preventDefault();
        $.ajax({
type:'POST',
    url:'json_files/sampson.json',
     dataType:'json',
    success: function(data) {
     $("#result").html("");
       $.each(data, function(key ,value){
           for (var i=0; i<value.length; i++) {
              var row = $('<h1>' + value[i].title+ '</h1><h2>'+value[i].month+'</h2><h3>'+value[i].speaker+'</h3><img src='+value[i].image+'><p>'+value[i].text+'</p>');
            $('#result').append(row);
            // console.log(value[i]);
        } 
       })
    },
    error: function(jqXHR, textStatus, errorThrown){
        alert('Error: ' + textStatus + ' - ' + errorThrown);
    }
        })
    
    })

})