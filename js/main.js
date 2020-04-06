$(function() {
    $('.bg-slider').bgSwitcher({
        images: ['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg','images/bg4.jpg'], // 切り替え画像
        Interval: 5000, //切り替えの間隔 1000=1秒
        start: true, //$.fn.bgswitcher(config)をコールした時に切り替えを開始する
        loop: true, //切り替えをループする
        shuffle: false, //背景画像の順番をシャッフルする
        effect: "fade", //エフェクトの種類 "fade" "blind" "clip" "slide" "drop" "hide"
        duration: 1000, //エフェクトの時間 1000=1秒
        easing: "swing", //エフェクトのイージング "swing" "linear"
    });

    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 150){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });

    $('#top-btn').click(function(){
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.menu-content').toggleClass('open');
    });

    // 表示させたいものを決める
    var navBox = $('#hamburger');
    navBox.hide();
    // この下で出てくる表示位置を決める
    var TargetPos = $('.bg-slider').height();
    $(window).scroll(function(){
        var ScrollPos = $(window).scrollTop();
    // .fadein(ここで秒数を決める)
        if(ScrollPos > TargetPos){
            navBox.fadeIn(1000);
        }else{
            navBox.fadeOut(1000);
        };
    });

});
