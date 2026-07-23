document.addEventListener('DOMContentLoaded', () => {
  const carouselInner = document.getElementById('carousel-inner');
  const dots = document.querySelectorAll('.carousel-dot');

  let currentIndex = 0;
  const totalSlides = dots.length;
  let autoSlideInterval;

  function goToSlide(index) {
    currentIndex = index;
    carouselInner.style.transform = `translateX(-${currentIndex * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });
  }

  function nextSlide() {
    goToSlide((currentIndex + 1) % totalSlides);
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      goToSlide(index);
      resetAutoSlide();
    });
  });

  startAutoSlide();
});
