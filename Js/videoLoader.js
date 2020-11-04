/**
 *adds video i for each div there are in the html file
 */
$(document).ready( function() {
    $("li2").each( function() {
        for(var i = 1; i<= 9; i++){
            $('#target').append($("<video class='column' width='630' height='600' controls >"))
          }
    });
    $("video").each( function(i) {
        $(this).append("<source src='Media/"+(++i)+".mp4'/>");
    });
});


/**
 *reverses the order of the items in li2
 */
$('#button-sort').click(function(){
    $('li2').html($('li2').find('video').get().reverse());
});
