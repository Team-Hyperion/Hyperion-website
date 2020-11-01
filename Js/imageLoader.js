/**
when the file/function is called, a picture will be added to each div
*/
$(document).ready( function() {
    $("div").each( function(i) {
        $(this).append("<img src='Media/"+(++i)+".png' width='600' height='600' />");
    });
});
