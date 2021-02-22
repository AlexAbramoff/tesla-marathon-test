$(function () {
  $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
  })

  $('.header__top-button').on('click', function () {
    $('.nav__menu').addClass('active')
  })
  $('.close__btn').on('click', function () {
    $('.nav__menu').removeClass('active')
  })
})
