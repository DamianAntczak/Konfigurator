$(document).ready(function () {
    $(".navigationbar .owl-carousel").owlCarousel({
        items: 1,
        loop: !0,
        dots: !1,
        autoplay: !0,
        autoplayTimeout: 4e3,
        touchDrag: !1,
        mouseDrag: !1,
        animateOut: "fadeOut",
        startPosition: Math.floor(Math.random() * ($(".navigationbar .owl-carousel > div").length + 1))
    });
});
