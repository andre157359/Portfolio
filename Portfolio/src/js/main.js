$(document).ready(function($) {
  $('#fullpage').fullpage({
   //sectionsColor:['#c63d0f','#1bbc9b','#7e8f7c'],
   anchors:['0rdPage', '1rdPage', '2rdPage', '3rdPage', '4rdPage', '5rdPage', '6rdPage',],
   menu: '#menu',
   //scrollOverflow: true,
   scrollBar:false,
   navigation: true, 
   navigationTooltips: ['Главная', 'навыки', 'работы', 'О себе', 'Картинки', 'ПОРАБОТАЕМ?',],
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

  $('.skillbar').each(function(){
  $(this).find('.skillbar-bar').animate({
    width:$(this).attr('data-percent')
  }, 7000)
});

  $('.ajax_contact').submit(function () {
      var form = $(this);
      var field = [];
      form.find('input[data-validate]').each(function () {
        field.push('input[data-validate]');
        var value = $(this).val(),
            line = $(this).closest('.form_group_1');
        for(var i=0;i<field.length;i++) {
          if( !value ) {
            line.addClass('some-form__line-required');
            setTimeout(function() {
              line.removeClass('some-form__line-required')
            }.bind(this),2000);
            event.preventDefault();
          }
        }
      });
});

    $('.ajax_contact').submit(function () {
        var form = $(this);
        var field = [];
        form.find('textarea[data-validate]').each(function () {
          field.push('textarea[data-validate]');
          var value = $(this).val(),
              line = $(this).closest('.form_group_1');
          for(var i=0;i<field.length;i++) {
            if( !value ) {
              line.addClass('some-form__line-required');
              setTimeout(function() {
                line.removeClass('some-form__line-required')
              }.bind(this),2000);
              event.preventDefault();
            }
          }
        });
});

$(function(){
  $("#tel").mask("8(999) 999-99-99");
});



});
