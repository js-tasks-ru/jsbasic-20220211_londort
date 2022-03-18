function initCarousel() {
  const sliderLine = document.querySelector('.carousel__inner'),
        slides = document.querySelectorAll('.carousel__slide'),
        prev = document.querySelector('.carousel__arrow_left'),
        next = document.querySelector('.carousel__arrow_right');

  let slideWidth = slides[0].offsetWidth,
      offset = 0;

  prev.style.display = 'none';

  next.addEventListener('click', () => {
    offset = offset + slideWidth;
    sliderLine.style.left = -offset + 'px';

    if (offset == slideWidth * (slides.length - 1)) {
      next.style.display = 'none';
    }else {
      next.style.display = '';
    }
  });

  prev.addEventListener('click', () => {
    offset = offset - slideWidth;
    if (offset !== 0) {
      prev.style.display = '';
    };
    sliderLine.style.left = -offset + 'px';
  }); 
}
