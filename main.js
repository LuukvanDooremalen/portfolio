const img = document.getElementById('image');
const img2 = document.getElementById('lamp');

let toggle = true;

img.addEventListener('click' , function(){

    toggle = !toggle;

    if (toggle) {
        img2.src= 'img\\lamplanguit2.svg';
        img.src = 'img\\aanknop.svg';
        
    }else{
        img2.src= 'img\\lamplangaan.svg';
        img.src = 'img\\button2.svg';

    }

})

$("#image").click(function() {
    $('#hoofd').toggleClass('white yellow');
  });

  $(document).ready(function () {
    // $("#mobile-menu-selector").click(function () {
    //   $(this).toggleClass("open");
    // });
  
    $(".mijnwerk-carousel").slick({
      dots: true,
      infinite: false,
      speed: 300,
      nextArrow: '<div class="angle-right"><img src="../img/right.svg"></div>',
      prevArrow: '<div class="angle-left"><img src="../img/left.svg"></div>',
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
  
    // $(window).resize(function () {
    //   $(".background-cover").height($("body").height());
    // });
  
    // $(".background-cover").height($("body").height());
  });

