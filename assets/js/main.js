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
    }else {
      $('#navigation').removeClass('navbar-fixed-top').addClass('navbar-static');;
    }
  });

  // Animate Progress Bar
  $('#front-bar').animate({ width: "70%" }, 2000);
  $('#back-bar').animate({ width: "50%" }, 2000);
  $('#design-bar').animate({ width: "40%" }, 2000);
  $('#english-bar').animate({ width: "20%" }, 2000);

  // Percent count
  $({ counter: 1 }).animate({ counter: 70 }, {
    duration: 1800,
    step : function(){
      $('#front-bar-count').text(Math.ceil(this.counter) + ' %');
    }
  });

  $({ counter: 1 }).animate({ counter: 50 }, {
    duration: 1800,
    step : function(){
      $('#back-bar-count').text(Math.ceil(this.counter) + ' %');
    }
  });

  $({ counter: 1 }).animate({ counter: 40 }, {
    duration: 1800,
    step : function(){
      $('#design-bar-count').text(Math.ceil(this.counter) + ' %');
    }
  });

  $({ counter: 1 }).animate({ counter: 20 }, {
    duration: 1800,
    step : function(){
      $('#english-bar-count').text(Math.ceil(this.counter) + ' %');
    }
  });

  // Animate Progress Bar Circle
  $('.dial').each(function () {
    var elm   = $(this);
    // var color = elm.attr("data-fgColor");
    var perc  = elm.attr("value");

    elm.knob({
      'value'        : 0,
      'min'          : 0,
      'max'          : 100,
      'width'        : 80,
      'height'       : 80,
      'fontWeight'   : 100,
      'thickness'    : .18,
      'fgColor'      : '#4a65ac',
      'bgColor'      : '#f9f9f9',
      'skin'         : 'tron',
      'inputColor'   : '#666',
      'linecap'      : 'round',
      'readOnly'     : true,
      'dynamicDraw'  : true,
      'displayInput' : true
    });

    $({value: 0}).animate({ value: perc}, {
      duration : 2000,
      easing   : 'swing',
      progress : function () {
        elm.val(Math.ceil(this.value)).trigger('change')
      }
    });
  });


});
