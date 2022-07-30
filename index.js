const slides = document.getElementsByClassName("slide");
const leftController = document.getElementById('left-controller');
const rightController = document.getElementById('right-controller');
let activeSlide = 0;

function handleSlides(direction) {
    if (direction === 'left') {
        slides[activeSlide].classList.add('go-left')
        if (slides[activeSlide].classList.contains('go-right')) {
            slides[activeSlide].classList.remove('go-right')
        }
        activeSlide ++;
        slides[activeSlide].classList.add('go-left')
        if (slides[activeSlide].classList.contains('go-right')) {
            slides[activeSlide].classList.remove('go-right')
        }
    } else if(direction === 'right') {
        if (activeSlide > 0) {
            slides[activeSlide].classList.add('go-right')
        if (slides[activeSlide].classList.contains('go-left')) {
            slides[activeSlide].classList.remove('go-left')
        }
        activeSlide --;
        slides[activeSlide].classList.add('go-right')
        if (slides[activeSlide].classList.contains('go-left')) {
            slides[activeSlide].classList.remove('go-left')
        }
        }
        
    }
    console.log(activeSlide);
}

leftController.addEventListener('click', ()=>{handleSlides('left')})
rightController.addEventListener('click', ()=>{handleSlides('right')})