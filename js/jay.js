
  $(function(){
        $(".btn-white").click(function(){
          if($(window).scrollTop()==0){
                   $("html").animate({scrollTop:800},1000)
          }
             $("body").animate({scrollTop:800},1000)
        })
  	$(window).scroll(function(){
  		if ($(window).scrollTop()>100) {
  			$(".col-css3-left").fadeIn(500).animate({left:'45%'},1000)
  		}
  	})
  	$(window).scroll(function(){
  		if ($(window).scrollTop()>200) {
  			$(".col-css3-right").fadeIn(500).animate({right:'45%'},1000)
  		}
  	})
  	$(window).scroll(function(){
  		if ($(window).scrollTop()>200) {
  			$(".col-css3-hide").fadeIn(2000)
  		}
  	})
  	$(".top").click(function(){
          if($(window).scrollTop()>0){
                   $("html").animate({scrollTop:0},1000)
          }
             $("body").animate({scrollTop:0},1000)
        })
  })


