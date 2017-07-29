$(document).ready(function(){

  // Init WOW Plugin
  new WOW().init();

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

  // Banner scroll
  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop >= 100){
      $('.icon-fade-scroll').fadeOut();
    }else {
      $('.icon-fade-scroll').fadeIn();
    }
  });

  // Navigation Script
  $(document).scroll(function(){
    var scrollTop = $(this).scrollTop();

    if(scrollTop >= 670){
      $('#navigation').addClass('navbar-fixed-top');
      $('.first-title').css({'margin-top': '100px'})
    }else {
      $('#navigation').removeClass('navbar-fixed-top').addClass('navbar-static');
      $('.first-title').css({'margin-top': '10px'})
    }
  });

  // Animate Progress Bar
  var checkAnimate = false;
  $(document).scroll(function() {
    var scrollTop = $(this).scrollTop();
    if(scrollTop > 800 && checkAnimate == false) {
      checkAnimate = true;
      $('#front-bar').animate({ width: "70%" }, 2600);
      $('#back-bar').animate({ width: "50%" }, 2600);
      $('#design-bar').animate({ width: "40%" }, 2600);
      $('#english-bar').animate({ width: "20%" }, 2600);

      // Percent count
      $({ counter: 0 }).animate({ counter: 70 }, {
        duration: 2600,
        step : function(){
          $('#front-bar-count').text(Math.ceil(this.counter) + ' %');
        }
      });

      $({ counter: 0 }).animate({ counter: 50 }, {
        duration: 2600,
        step : function(){
          $('#back-bar-count').text(Math.ceil(this.counter) + ' %');
        }
      });

      $({ counter: 0 }).animate({ counter: 40 }, {
        duration: 2600,
        step : function(){
          $('#design-bar-count').text(Math.ceil(this.counter) + ' %');
        }
      });

      $({ counter: 1 }).animate({ counter: 20 }, {
        duration: 2600,
        step : function(){
          $('#english-bar-count').text(Math.ceil(this.counter) + ' %');
        }
      });


      // Animate Progress Bar Circle
      $('.dial').each(function () {
        var elm   = $(this);
        var perc  = elm.attr("value");

        elm.knob({
          'value'        : 0,
          'min'          : 0,
          'max'          : 100,
          'width'        : 80,
          'height'       : 80,
          'fontWeight'   : 100,
          'thickness'    : .18,
          'fgColor'      : '#1d99ae',
          'bgColor'      : '#f9f9f9',
          'skin'         : 'tron',
          'inputColor'   : '#999',
          'linecap'      : 'round',
          'tickColorizeValues': true,
          'readOnly'     : true,
          'dynamicDraw'  : true,
          'displayInput' : true
        });

        $({value: 0}).animate({ value: perc}, {
          duration : 2600,
          easing   : 'swing',
          progress : function () {
            elm.val(Math.ceil(this.value)).trigger('change')
          }
        });
      });
    }
  });

  // Script for scrolls -> use the class .scroll to active
  $(".scroll").click(function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1400);
  });

  // Go top Fade In
  $(window).scroll(function(){
    if($(this).scrollTop() >= 1400){
      $('#goTop').fadeIn('slow');
    }else {
      $('#goTop').fadeOut('slow');
    }
  });

  // Go top
  $('#goTop').click(function(){
    $('body, html').animate({scrollTop:0}, 1000);
  });

});
