$(document).ready( function() {
		/**
 		*creates div tags depending on number
 		*/
    $("li2").each( function() {
        for(var i = 1; i<= 9; i++){
            $('#target').append($("<div class='column'>"))
          }
    });
		/**
 		adds image i for each div there are in the html file
 		*/
    $("div").each( function(i) {
        $(this).append("<img src='Media/"+(++i)+".png' width='630' height='600'/>");
    });
});

/**
 *reverses the order of the items in li2
 */
$('#button-sort').click(function(){
    $('li2').html($('li2').find('div').get().reverse());
});
