$(document).ready(function(){
  $(".wrong").click(function(){
    $(this).css({"background-color": "#d63636", "color": "white"});
  });
  $(".right").click(function(){
    $(this).css({"background-color": "#32a852", "color": "white"});
  });
});
