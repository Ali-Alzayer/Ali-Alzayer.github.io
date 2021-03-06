const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter 
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.getElementsByClassName.transform = 'translateX(' +(-size *counter) + 'px)';

//Button Listeners 

nextBtn.addEventListener('click', () =>{
    if (counter >=carouselImages.length -1) return;
carouselSlide.style.transition = "transform 0.4s ease-in-out";
counter++;
carouselSlide.style.transform = 'translateX(' +(-size *counter) + 'px)';

});

prevBtn.addEventListener('click', () =>{
    if (counter <= 0) return;
    carouselSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' +(-size * counter) + 'px)';
    
    });
    carouselSlide.addEventListener('transitioned', () =>{
        if (carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
        if (carouselImages[counter].id === 'fistClone'){
            carouselSlide.style.transition = "none";
            counter = carouselImages.length - counter;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    });