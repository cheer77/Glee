$(function () {

    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        // autoplay: true,
        // autoplaySpeed: 3500
    })


    var mixer = mixitup('.products__categories', {
        selectors: {
            control: '.products__btn-item'
        }
    });
});