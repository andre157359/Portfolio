$(document).ready(function(){
 $('.header-contacts__button').on("click", function(){
   $('.overlay').show();
 });
 $('.popup-close').on("click",function(){ 
 	$('.overlay').hide();
 });
});

$(document).ready(function(){
$('.stat').each(function() {
	$(this).prop('Counter',0).animate({
		Counter: $(this).text()
	}, {
		duration: 1000,
		easing: 'swing',
		step:function(now){
			$(this).text(Math.ceil(now));
		}
	});
});
});