(function(){
	$(".index_nav li").on({
		mouseenter:function(){
			$(this).children(".xl").slideDown();
			$(this).siblings().children(".xl").slideUp();
		},
		mouseleave:function(){
			$(".index_nav li").children(".xl").slideUp();
		}
	})
})();