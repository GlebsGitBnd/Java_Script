$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        center: true,
        nav: true,
        navText: [
            '<img src="Img/icons/left.png" alt="left">',
            '<img src="Img/icons/right.png" alt="right">'
        ],
        dotsContainer: '.dots',
        navSpeed: 1500,
        dotsSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
    });
});