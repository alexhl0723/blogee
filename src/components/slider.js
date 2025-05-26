const slider = document.getElementById('slider-track');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const sliderContainer = document.getElementById('article-slider');

let autoScrollInterval;
let scrollAmount = 300;

function scrollNext() {
    slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
}

function scrollPrev() {
    slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
}

function startAutoScroll() {
    autoScrollInterval = setInterval(scrollNext, 4000);
}

function stopAutoScroll() {
    clearInterval(autoScrollInterval);
}

nextBtn.addEventListener('click', scrollNext);
prevBtn.addEventListener('click', scrollPrev);

sliderContainer.addEventListener('mouseenter', stopAutoScroll);
sliderContainer.addEventListener('mouseleave', startAutoScroll);

startAutoScroll();
