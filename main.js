const img = document.getElementById('image');
const img2 = document.getElementById('lamp');



const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
// const navitem = document.querySelector(".navbar");
hamburger.addEventListener("click",Menu);




function Menu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


let toggle = true;



img.addEventListener('click' , function(){
    $('body').addClass('actief');

    toggle = !toggle;

    if (toggle) {
        img2.src= 'img\\lamplanguit2.svg';
        img.src = 'img\\aanknop.svg';
        
    }else{
        img2.src= 'img\\lamplangaan.svg';
        img.src = 'img\\button2.svg';

    }

})

// navitem.addEventListener('click' , function(){
//     $('body').addClass('actief');

// })


$("#image").click(function() {
    $('#hoofd').toggleClass('white yellow');
    });

$(document).ready(function () {

    $(".mijnwerk-carousel").slick({
    dots: true,
    infinite: false,
    speed: 300,
    nextArrow: '<div class="angle-right"><img src="img/right.svg"></div>',
    prevArrow: '<div class="angle-left"><img src="img/left.svg"></div>',
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
        {
        breakpoint: 1028,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
        {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        },
        },
    ],
    });
});

