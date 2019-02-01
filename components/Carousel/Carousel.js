
class Carousel {
    constructor(image) {
        this.image = image;
        this.dataCount = this.image.dataset.count;
        
        leftBtn.addEventListener('click', () => this.slideLeft());
        rightBtn.addEventListener('click', () => this.slideRight());
    }

    slideLeft() {
        console.log('currPos-left-start: ', currentPosition);

        if (this.image.classList.contains('display-img')) {
            currentPosition = Number(this.dataCount);
            this.image.classList.remove('display-img')
        }
        console.log('currPos-left-after-for: ', currentPosition);
        currentPosition = currentPosition - 1;
        if (currentPosition <= 0) {
            currentPosition = carouselImg.length;
        }
        console.log('currPos-left-after-if-into-next: ', currentPosition);
        let nextItem = document.querySelector(`.carousel img[data-count="${currentPosition}"]`);
        console.log('nextItem-after-curPos: ', nextItem);
        nextItem.classList.add('display-img');
    }

    slideRight() {
        console.log('currPos-right-start: ', currentPosition);

        if (this.image.classList.contains('display-img')) {
            currentPosition = Number(this.dataCount);
            this.image.classList.remove('display-img')
        }
        console.log('currPos-right-after-for: ', currentPosition);
        currentPosition = currentPosition + 1;
        console.log('carouselImg length', carouselImg.length)
        if (currentPosition > carouselImg.length) {
            currentPosition = 1;
        }
        console.log('currPos-right-after-if-into-next: ', currentPosition);
        let nextItem = document.querySelector(`.carousel img[data-count="${currentPosition}"]`);
        console.log('nextItem-after-curPos: ', nextItem);
        nextItem.classList.add('display-img');
    }

}

let carousel = document.querySelector('.carousel');
let leftBtn = carousel.firstElementChild;
let rightBtn = carousel.lastElementChild;
let currentPosition;


let carouselImg = document.querySelectorAll('.carousel img');
carouselImg.forEach(img => new Carousel(img));



/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/