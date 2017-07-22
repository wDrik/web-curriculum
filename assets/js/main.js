$(document).ready(function(){



  // Paralax effect
  var height = $(window).height();

  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();
    var pixels = scrollTop / 80;

    if(scrollTop < height){
      $('#border').css({
        'margin-top': pixels * 80 +'px',
        'opacity' : (1 - scrollTop/2000)
      });
    }
  });

  // Navigation Script
  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop >= 672){
      $('#navigation').addClass('navbar-fixed-top');
      $( ".inner-bar" ).animate({
        width: "70%",
        opacity: 0.4
        // marginLeft: "0.6in",
        // fontSize: "3em",
        // borderWidth: "10px"
      }, 1500 );

    }else {
      $('#navigation').removeClass('navbar-fixed-top').addClass('navbar-static');;
    }
  });




  function animateProgressBar(percentageCompleted) {
  }

});
