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
      $('.inner-bar').animate({
        width: "70%",
        opacity: 0.4
      }, 2000);
    }else {
      $('#navigation').removeClass('navbar-fixed-top').addClass('navbar-static');;
    }
  });


  // Percent count
  $({ counter: 1 }).animate({ counter: 70 }, {
    duration: 1800,
    step : function(){
      $('.inner-bar-count').text(Math.ceil(this.counter) + ' %');
    }
  });



});
