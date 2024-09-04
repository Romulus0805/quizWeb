$(document).ready(function(){
  $(".wrong").click(function(){
    $(this).css({"background-color": red, "color": white});
  });
  $(".right").click(function(){
    $(this).css({"background-color": green, "color": white});
  });
});
