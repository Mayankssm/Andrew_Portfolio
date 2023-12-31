$(document).ready(function(){
  $(window).scroll(function(){
      // sticky navbar on scroll script
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }else{
          $('.navbar').removeClass("sticky");
      }
      });
/*responsive media */
//toggle menu/navbar script
$('.menu-btn').click(function(){
  $('.navbar.menu').toggleClass("active");
  $('.menu-btn i').toggleClass("active");
});

$('a').click(function(){
$('.navbar.logo a').toggleClass("active");
$('.home a').toggleClass("active");
$('.about a').toggleClass("active");
$('.contact a').toggleClass("active");
});

//owl-carousel script
$('.carousel').owlCarousel({
  margin: 20,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  responsive: {
      0:{
          items: 1,
          nav: false
      },
      600:{
          items: 2,
          nav: false
      },
      1000:{
          items: 3,
          nav: false
      }
  }
});
});