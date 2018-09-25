$(function(){
//	导航
	$('.header .iconfo').click(function(){
		$('.header_show').fadeIn()
	})
	$('.header_show .cha').click(function(){
		$('.header_show').fadeOut();
	})
	$('.header_right .icon').click(function(){
		$('.header_txt').toggle();
	})
	$('.search span').click(function(){
		$('.search #txt').toggle();
	})
})
