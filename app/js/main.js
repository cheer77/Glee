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

    var mixer = mixitup('.design__categories', {
        selectors: {
            control: '.design__btn-item'
        }
    });
});