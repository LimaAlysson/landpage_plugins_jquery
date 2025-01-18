$(document).ready(function(){
    $('#carousel-images').slick({
        autoplay: true,
        arrows: false, // remove as setas
        dots: false, // remove os pontos de navegação
    });

    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle('slow');
    })
});