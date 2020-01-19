$("#portfolio").slick({
    arrows: false,
    dots: true,
    speed: 800,
    slidesToScroll: 1,
    slidesToShow: 1
});

$('#portfolio-arrow-prev').on('click', function(event){
    event.preventDefault();
    $("#portfolio").slick('slickPrev');
});

$('#portfolio-arrow-next').on('click', function(event){
    event.preventDefault();
    $("#portfolio").slick('slickNext');
});
