/**
 *adds video i for each div there are in the html file
 */
$(document).ready( function() {
    $("video").each( function(i) {
        $(this).append("<source src='Media/Videos/"+(++i)+".mp4'/>");
    });
});

/**
 *reverses the order of the items in li2
 */
$('#button-sort').click(function(){
    $('li2').html($('li2').find('video').get().reverse());
});