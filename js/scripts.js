$(document).ready(function() {

  $(".clickable1").click(function() {
    $(".image1").toggle();
    $(".whatwedo1").toggle();
  });

  $(".clickable2").click(function() {
    $(".image2").toggle();
    $(".whatwedo2").toggle();
  });

  $(".clickable3").click(function() {
    $(".image3").toggle();
    $(".whatwedo3").toggle();
  });



  $("form").submit(function() {
    event.preventDefault();
    var name = document.getElementById('name')
    var email = document.getElementById('email')
    var send = "Your Message is submitted"
    if (name.value === '' || name.value == null) {
      alert("Fill the form");
    } else {
      alert(send);
    }


  });

  $('.portimg').hover(function(){
    $('.porttext',this).slideToggle('slow');
 }, function(){
    $('.porttext',this).slideToggle('slow');
 });
});
