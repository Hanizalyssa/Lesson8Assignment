(function($) {
  
    'use strict';
  
    var $isAnimatedSecond = $('.second .is-animated'),
        $isAnimatedSecondSingle = $('.second .is-animated__single'),
        $isAnimatedThird = $('.third .is-animated'),
        $isAnimatedThirdSingle = $('.third .is-animated__single');

    $('#fullpage').fullpage({
  
      navigation: true,
      onLeave: function(index, nextIndex, direction) {
   
        if( index == 1 && nextIndex == 2 ) { 
          $isAnimatedSecond.addClass('animated fadeInUpBig'); 
          $isAnimatedSecond.eq(0).css('animation-delay', '.3s');
          $isAnimatedSecond.eq(1).css('animation-delay', '.6s');
          $isAnimatedSecond.eq(2).css('animation-delay', '.9s');
          $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
        }
  

        else if( ( index == 1 || index == 2 ) && nextIndex == 3 ) {
          $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s'); 
          $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
          $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
        }
  
        else if( ( index == 1 || index == 2 || index == 3 ) && nextIndex == 4 ) {
          $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
          $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
          $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
          });
        }
      }
  
    });
    
  })(jQuery);