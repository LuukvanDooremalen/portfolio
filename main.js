const img = document.getElementById('image');
const img2 = document.getElementById('lamp');

let toggle = true;

img.addEventListener('click' , function(){

    toggle = !toggle;

    if (toggle) {
        img2.src= 'img\\lamplanguit.svg';
        img.src = 'img\\aanknop.svg';
        
    }else{
        img2.src= 'img\\lamplangaan.svg';
        img.src = 'img\\button2.svg';

    }

})

$("#image").click(function() {
    $('#hoofd').toggleClass('white yellow');
  });

