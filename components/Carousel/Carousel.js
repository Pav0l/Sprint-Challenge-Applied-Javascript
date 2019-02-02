// Grab references for carousel images and carousel.
let carouselImg = document.querySelectorAll('.carousel img');
let carousel = document.querySelector('.carousel');
// Add 'click' listeners to carousel buttons
let leftBtn = carousel.firstElementChild.addEventListener('click', () => slide(-1));
let rightBtn = carousel.lastElementChild.addEventListener('click', () => slide(1));
// Set current position to 1 - current 'display-img' position based on html data-count attribute
let currentPosition = 1;

function slide(num) {
    // Check with Node List item (position) has 'display-img' class
    for (let i = 0; i < carouselImg.length; i++) {
        if (carouselImg[i].classList.contains('display-img')) {
            // update current position based on Node list data-count attribute change position +1/-1
            currentPosition = Number(carouselImg[i].dataset.count)+Number(num);
            carouselImg[i].classList.remove('display-img');
            // check if current position did not go over Node list length or equal to 0
            if (currentPosition > carouselImg.length) {
                currentPosition = 1;
            } else if (currentPosition <= 0) {
                currentPosition = carouselImg.length;
            }
            // Add 'display-img' to next item based on data-count attribute
            let nextItem = document.querySelector(`.carousel img[data-count="${currentPosition}"]`);
            nextItem.classList.add('display-img');
            return currentPosition;
        }
    }
}

