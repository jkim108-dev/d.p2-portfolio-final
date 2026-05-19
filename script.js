
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0px)";

    }

  });

}, {
  threshold:0.2
});

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "1s cubic-bezier(.16,1,.3,1)";

  observer.observe(card);

});


const sliders = document.querySelectorAll('.image-slider');

sliders.forEach((slider) => {

  const slides = slider.querySelectorAll('.slider-image');

  let currentSlide = 0;

  slides[0].classList.add('active');

  setInterval(() => {

    slides[currentSlide].classList.remove('active');

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add('active');

  }, 3000);

});