$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items: 5,
        margin: 10,
        responsive : {
            0: {
                items: 2
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });

    function sliderNav(owlNav, myNav){
        const feedSlider = $('.feedback-slider');
        $(owlNav).hover(
            function (){
                $(this).parents(feedSlider).find(myNav).css('fill','#80c340');
            }, function (){
            $(this).parents(feedSlider).find(myNav).css('fill','#898989');
        }
        )
    }
    sliderNav('.owl-next', '.slider-nav__svg--next');
    sliderNav('.owl-prev', '.slider-nav__svg--prev');

    ymaps.ready(init);
    function init() {
        var map = new ymaps.Map("map", {
            center: [59.930358, 30.321689],
            zoom: 12,
        });

        var placemark1 = new ymaps.Placemark([59.930358, 30.321689], {
            hintContent: "г.Санкт-Петербург, Мучной переулок, д.3А",
            balloonContent: "Наш главный офис"
        }, {
            preset: 'islands#redDotIcon'
        });

        map.geoObjects
            .add(placemark1);
    }
});
