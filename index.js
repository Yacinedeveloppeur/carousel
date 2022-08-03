/* GET DOM ELEMENTS SLIDES AND CONTROLLER */
const slides = document.getElementsByClassName("slide");
const leftController = document.getElementById("left-controller");
const rightController = document.getElementById("right-controller");

/*Initialize a variable to determine the slide to display*/
let activeSlide = 0;

/*To checks if class exist and remove her*/
function removeClass(classToRemove) {
if(slides[activeSlide].classList.contains(classToRemove)){ slides[activeSlide].classList.remove(classToRemove)
  }
}

/*To clean all animation class*/
function removeAllAnimationClass() {
    removeClass('hide-slide-on-the-right');
    removeClass('hide-slide-on-the-left');
    removeClass('show-slide-from-right');
    removeClass('show-slide-from-left');
}

/*To add animation class*/
function addClass(classToAdd) {
  slides[activeSlide].classList.add(classToAdd);
}

/*DISPLAY NEXT SLIDE*/
  //If its not the last slide, clean active animation class, hide slide on the left and display the next slide from the right
rightController.addEventListener('click', (e)=>{
  e.preventDefault();
  if(activeSlide < slides.length -1) {
    removeAllAnimationClass();
    addClass('hide-slide-on-the-left');
    activeSlide ++;
    removeAllAnimationClass()
    addClass('show-slide-from-right')
  }
})

/*DISPLAY PREV SLIDE*/
  //If its not the first slide, clean active animation class, hide slide on the right and display the next slide from the left
leftController.addEventListener('click', (e)=> {
  e.preventDefault();
  if(activeSlide>0) {
    removeAllAnimationClass()
    addClass('hide-slide-on-the-right')
    activeSlide--;
    removeAllAnimationClass();
    addClass('show-slide-from-left')
  }
})
