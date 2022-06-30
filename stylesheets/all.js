$(document).ready(function(){
  // #1  標題隱藏
  $("header").click(function(event){
    $("header").slideUp(1000);
    $("header").slideDown(1000);
  });
  //
  $('#card-1').click(function(event){
    $('#cardOne').slideUp(2000);
    $('#cardOne').slideDown(2000);
  });
  //
  $('#card-2').click(function(event){
    $('#cardTwo').addClass('animate__flip');
  });
  //
  $('#card-3').click(function(event){
    $('#cardThree').addClass('animate__heartBeat');
  });
  //
  $('#card-4').click(function(event){
    $('#cardFour').addClass('animate__wobble');
  });
  //


});