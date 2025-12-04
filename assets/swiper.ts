declare const Swiper: any;

document.addEventListener('DOMContentLoaded', function() {
  if (typeof Swiper !== 'undefined') {
    const swiper = new Swiper('.swiper', {
      effect: "coverflow",
      grabCursor: true,
      direction: 'horizontal',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      slidesPerView: "auto",
      centeredSlides: true,
      pagination: {
        clickable: true,
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      watchSlidesProgress: true,
      slideToClickedSlide: true,

    });

    (async () => {
      const response = await fetch('/img/demo-slider/demo-slider-index.json');
      const images = await response.json();

      const wrapper = document.querySelector('.swiper-wrapper');
      wrapper.innerHTML = '';
      images.forEach((imgUrl, index) => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
        slide.innerHTML = `<img src="${imgUrl}" alt="Gallery image ${index + 1}" style="cursor:pointer;" />`;
        wrapper.appendChild(slide);
      });

      // Add modal functionality
      const modal = document.getElementById('image-modal') as HTMLElement;
      const modalImg = document.getElementById('modal-img') as HTMLImageElement;
      const closeModal = document.getElementById('close-modal') as HTMLElement;


      // Add click event to all images
      document.querySelectorAll('.swiper-slide img').forEach(img => {
        img.addEventListener('click', function() {
          modalImg.src = (this as HTMLImageElement).src;
          modalImg.alt = img.getAttribute('alt')
          console.log("ALT TEXT", modalImg.alt)
          modal.style.display = 'flex';
        });
      });

      // Close modal when clicking close button
      closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
      });

      // Close modal when clicking outside the image
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      });
    })();
  } else {
    console.error('Swiper is not loaded. Make sure the Swiper CDN script is included before this script.');
  }


});