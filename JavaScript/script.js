var slides = document.querySelectorAll('.box');
var btns = document.querySelectorAll('.cursorbtn');
let currentslide = 1;

var manualnav = (manual) => {
    slides.forEach((container_box) => {
      container_box.classList.remove('active');
        btns.forEach((cursorbtn) => {
        cursorbtn.classList.remove('active');
        });
    });
    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    }
btns.forEach((cursorbtn, i) => {
    cursorbtn.addEventListener("click", () => {
        manualnav(i);
        currentslide = i;
    });
});
// Javascript navigation for the auto-play
var repeat = function(active){
let active = document.getElementsByClassName('.active');
let i = 1;

var repeater = () => {
    setTimeout(function(){
        [...active].forEach((activeslide) => {
            activeslide.classList.remove('active');
        });
        slides[i].classList.add('active');
        btns[i].classList.add('active');
        i++;

        if(slides.length == i){
            i = 0;
        }
        if(i >= slides.length){
            return;
        }
        repeater();
    }, 10000);
}
repeater();
}
repeat();

/* var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("box");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */

