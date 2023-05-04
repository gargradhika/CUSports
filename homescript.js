//for header
let menu=document.querySelector('#menu-btn');
let navbar=document.querySelector('.navbar');
menu.onclick= () =>{
    menu.onclick.toggler('fa-times');
    navbar.classList.toggler('active');

}
//for window scroll
window.onscroll= () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    if(window.scrollY>0){
        document.querySelector('.header').classList.add('active');
    
    }
    else{
        document.querySelector('.header').classList.remove('active');
    }
    window.onload= () =>{
        if(window.scrollY>0){
            document.querySelector('.feature').classList.add('active');
        
        }
        else{
            document.querySelector('.feature').classList.remove('active');
        }
    }

}

//for feature section 
var swiper = new Swiper(".feature-slider",{
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlices: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,

    },
 breakpoints: { 
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 1,
    },
    991: {
        slidesPerView: 1,
    },
 }
});

var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    centeredSlices: true,
    autoplay:{
        delay: 9500,
        disableOnInteraction: false,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,

    },
    breakpoints: { 
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        991: {
            slidesPerView: 1,
        },
    }
    });
    var TrandingSlider = new Swiper('.tranding-slider', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
      });