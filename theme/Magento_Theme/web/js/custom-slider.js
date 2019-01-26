define([
    'jquery',
    'slick'
], function ($) {
    'use strict';

    $('#custom-top-slider').slick({
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
});