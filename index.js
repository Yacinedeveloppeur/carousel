const slides = document.getElementsByClassName("slide");
const controllers = document.getElementsByClassName("carousel__controllers")
const leftController = controllers[0];
const rightController = controllers[1];

leftController.addEventListener('click', () => {
    console.log('clicker');
    slides[0].classList.add('hide-to-the-left')
})