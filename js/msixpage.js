$(window).load(function() {
        $('.btn-nav').on('click tap', function() {
            $('.nav-content').toggleClass('showNav hideNav').removeClass('hidden');
            $(this).toggleClass('animated');
        });
    });


 $(".pack-tab ul li").click(function(){
        var $this = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".pack-cons .pack-con").eq($this).show().siblings().hide();
   })

  $(".pick-tab ul li").click(function(){
        var $this = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".pick-cons .pick-con").eq($this).show().siblings().hide();
   })
