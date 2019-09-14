$(document).ready(function($) {
  $('#fullpage').fullpage({
   //sectionsColor:['#c63d0f','#1bbc9b','#7e8f7c'],
   anchors:['Page',],
   menu: '#menu',
   //scrollOverflow: true,
   scrollBar:false,
   //navigation: true, 
   navigationTooltips: ['Секция 1', 'Секция 2', 'Секция 3', 'Секция 4', 'Секция 5', 'Секция 6',],
   //slidesNavigation:true,
  // loopTop: true,
   loopBottom: true,
   easingcss3: 'cubic-bezier(1.000, -0.440, 0.265, 1.385)',
   scrollingSpeed: 1200,
   v2compatible: true,

   //events
   onLeave: function(index, nextIndex, direction) {
     $(this).addClass('remove-circle');
     $('.fp-section').eq(nextIndex - 1).removeClass('remove-circle');
   },

  });

var button = document.querySelector("button");
button.onclick = function() {
       document.querySelector(".contact").classList.toggle('open');
       document.querySelector(".button_thank").classList.toggle('open');
        return false;
    };


});
