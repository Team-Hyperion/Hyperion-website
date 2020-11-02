/**
 adds image i for each div there are in the html file
 */
$(document).ready( function() {
    $("div").each( function(i) {
        $(this).append("<img src='Media/Photos/"+(++i)+".png' width='630' height='600'/>");
    });
});

/**
 *reverses the order of the items in li2
 */
$('#button-sort').click(function(){
    $('li2').html($('li2').find('div').get().reverse());
});
