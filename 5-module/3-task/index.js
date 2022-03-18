function initCarousel() {
  const sliderLine = document.querySelector('.carousel__inner'),
        slides = document.querySelectorAll('.carousel__slide'),
        prev = document.querySelector('.carousel__arrow_left'),
        next = document.querySelector('.carousel__arrow_right');

  let slideWidth = sliderLine.offsetWidth,
      offset = 0;

  

  function arrowControl () {
    if (offset == slideWidth * (slides.length - 1)) {
      next.style.display = 'none';
    }else {
      next.style.display = '';
    };

    if (offset !== 0) {
      prev.style.display = '';
    }else {
      prev.style.display = 'none';
    }
  }

  arrowControl();

  next.addEventListener('click', () => {
    offset = offset + slideWidth;
    let x = sliderLine.style.transform = `translateX(${-offset}px)`;
    console.log(x) 
    arrowControl();
  });

  prev.addEventListener('click', () => {
    offset = offset - slideWidth;
    let y = sliderLine.style.transform = `translateX(${-offset}px)`;
    console.log(y); 
    arrowControl();
  });  
  console.log(slideWidth);
}
