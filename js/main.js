$(function () {
    // 헤더
    $(window).scroll(function () {
        // let scrolled = $(window).scrollTop >= 20
        // $('.menu-nav').toggleClass('on', scrolled)
        console.log($(window).scrollTop())
        if ($(window).scrollTop() > 0) {
            $('.menu-nav').addClass('on')
        } else {
            $('.menu-nav').removeClass('on')
        }
    })
    // 웹 이동
    const menus = $('.menu-nav .menu-ul li')
    const mobiles = $('.mobile-nav .mobile-ul li')
    const contents = $('.container > div')

    menus.click(function (e) {
        e.preventDefault()
        menus.removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        let div = contents.eq(idx)
        let divDistance = div.offset().top - (114)

        $('html, body').animate({
            scrollTop: divDistance
        })
    })
    mobiles.click(function (e) {
        e.preventDefault()
        menus.removeClass('on')
        $(this).addClass('on')

        let idx = $(this).index()
        let div = contents.eq(idx)
        let divDistance = div.offset().top - (100)

        $('html, body').animate({
            scrollTop: divDistance
        })
    })
    $(window).scroll(function(){
        contents.each(function(){
            if ($(this).offset().top <= $(window).scrollTop() +120){
                let idx = $(this).index()
                menus.removeClass('on')
                menus.eq(idx).addClass('on')
            }
        })
    })
    // 스크롤 탑
    $(window).scroll(function(){
        if($(window).scrollTop()>=1000){
            $('.go-top').fadeIn()
        }else{
            $('.go-top').fadeOut()
        }
    })
    $('.go-top').click(function(e){
        e.preventDefault()
        $('html,body').stop().animate({
            scrollTop: '0'
        }, 1000)
    })
    // 모바일 반응형
    $('.hamburger').click(function(){
        $('.mobile-nav').slideToggle(500)
    })
    $('.mobile-nav').mouseleave(function(){
        $('.mobile-nav').slideUp()
    })
})