///////////////////////
// CODE FOR CAROUSEL //
///////////////////////

$("#slideshow-container > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow-container > div:first')
    .fadeOut(0)
    .next()
    .fadeIn(1200)
    .end()
    .appendTo('#slideshow-container');
},  5000);




///////////////////////////
// OLD CODE FOR CAROUSEL //
///////////////////////////

// var slideIndex = 1;
// // showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("main-header");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// setInterval(showSlides(slideIndex), 3000);

