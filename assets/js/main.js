$(document).ready(function(){

  // Paralax effect
  var height = $(window).height();
  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var pixels = scrollTop / 70;

    if(scrollTop < height){
      $("#border").css({
        "margin-bottom": pixels * 71 +"px",
      });

      $("#banner").css({
        "background-position":"center -"+ pixels * 10 +"px"
      });
    }
  });

});
