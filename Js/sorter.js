/**
  reverses the div order when the sort button is pressed
 */
$('#button-sort').click(function(){

  $('li2').html($('li2').find('div').get().reverse());
  });