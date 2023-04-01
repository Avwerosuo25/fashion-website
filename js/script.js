$(document).ready(function() {
  var navbar = $('.navbar');
  var navbarOffset = navbar.offset().top;

  $(window).scroll(function() {
    if ($(window).scrollTop() > navbarOffset) {
      navbar.addClass('fixed-top');
    } else {
      navbar.removeClass('fixed-top');
    }
  });
});


  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });