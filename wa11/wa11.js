const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

prevButton.addEventListener('click', e=> {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
    
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot,nextDot);
})

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex]; 

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot,targetDot);
})


// slides[0].style.left = slidesWidth * 0 + 'px';
// slides[1].style.left = slidesWidth * 1 + 'px';
// slides[2].style.left = slidesWidth * 2 + 'px';
// slides[3].style.left = slidesWidth * 3 + 'px';
// slides[4].style.left = slidesWidth * 4 + 'px';
// slides[5].style.left = slidesWidth * 5 + 'px';

// click left- move slide to left
//click right - move slide to right