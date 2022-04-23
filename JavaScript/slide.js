var slides = document.getElementsByClassName('box');
var dots = document.getElementsByClassName('dot');
var currentSlide = 1;
// Manual Navigation
/*var manualNav = function(manual){
  slides.forEach((box) => {
    box.classList.remove('active');

    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
  });

  slides[manual].classList.add('active');
  dots[manual].classList.add('active');

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      manualNav[i];
      currentSlide = i;
    });
  });
}*/


/* Auto Navigate Slider*/
function activeClass() {
  let i = 1;
  let start = document.getElementsByClassName('active');
  var repeater = () => {
    setTimeout(function(){
      [...start].forEach((activeSlide) =>{
        activeSlide.classList.remove('active');
      });
      slides[i].classList.add('active');
      dots[i].classList.add('active');
      i++;

      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater();
    }, 6000);
  }
  repeater();
}
activeClass();



