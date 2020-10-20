const menuClick = document.querySelector('.menu');
const menuContent = document.querySelector('.menu_content');
const section = document.querySelectorAll('.none');
// @ts-ignore
menuClick.addEventListener('click', e => {
    menuClick.classList.toggle('active');
    menuContent.classList.toggle('open');
    // display none all section after click menu
    section.forEach(content => {
        content.classList.toggle('active');
    });
});

// @ts-ignore
$(document).ready(function () {
    //brand_slider
    // @ts-ignore
    $('.brand_slider').slick({
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 3,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 2,
                },
            },
        ],
    });

    //testimonial_slider
    // @ts-ignore
    $('.testimonial_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,

    });
    //details_slider
    // @ts-ignore
    $('.details-slider-active').slick();

    // Projects slider
    // @ts-ignore
    $('.project_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        infinite: true,
        centerPadding: '290px',
        // autoplay: true,
        // autoplaySpeed: 1000,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    centerPadding: '0px',
                },
            },
            {
                breakpoint: 600,
                settings: {
                    centerPadding: '0px',
                },
            },

        ],
    });
});
