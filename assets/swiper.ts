declare const Swiper: any;

async function fetchImages(resourceId: string, blobBaseUrl: string): Promise<string[]> {
  const listUrl = `${blobBaseUrl}?restype=container&comp=list&prefix=images/${resourceId}`;
  const response = await fetch(listUrl);
  const xml = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const blobs = doc.querySelectorAll('Blob > Name');
  return Array.from(blobs).map(b => `${blobBaseUrl}/${b.textContent}`);
}

function getRandomImages(images: string[], amount: number) {
  const sortedImages = images.sort(() => Math.random() - 0.5);
  return sortedImages.slice(0, amount)
}

const swiperConfigs = {
  coverflow: {
    effect: 'coverflow',
    grabCursor: true,
    direction: 'horizontal',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    slidesPerView: 'auto',
    centeredSlides: true,
    pagination: {
      clickable: true,
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
    slideToClickedSlide: true,
  },
  hero: {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  }
}

function createSwiper(config: string): any {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper is not loaded. Make sure the Swiper CDN script is included before this script.');
    return null;
  }
  if (!config){
    console.error('No config has been set for Swiper')
  }

  const carouselConfig = swiperConfigs[config]

  return new Swiper('.swiper', carouselConfig);
}

function populateSlides(wrapper: Element, images: string[], config: string): Promise<void> {
  wrapper.innerHTML = '';
  return new Promise((resolve) => {
    images.forEach((imgUrl, index) => {
      const slide = document.createElement('div');
      slide.className = `swiper-slide ${config}`;
      const img = document.createElement('img');
      img.src = imgUrl;
      img.alt = `Gallery image ${index + 1}`;
      img.style.cursor = 'pointer';

      // Lazy load all images except the first one
      if (index > 0) {
        img.loading = 'lazy';
      }

      if (index === 0) {
        if (img.complete) {
          resolve();
        } else {
          img.addEventListener('load', () => resolve());
          img.addEventListener('error', () => resolve());
        }
      }

      slide.appendChild(img);
      wrapper.appendChild(slide);
    });
  });
}

function setupModal(): void {
  const modal = document.getElementById('image-modal') as HTMLElement;
  const modalImg = document.getElementById('modal-img') as HTMLImageElement;
  const closeModal = document.getElementById('close-modal') as HTMLElement;

  if (!modal || !modalImg || !closeModal) {
    console.error('Modal elements not found');
    return;
  }

  document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.addEventListener('click', function () {
      modalImg.src = (this as HTMLImageElement).src;
      modalImg.alt = img.getAttribute('alt') || '';
      modal.style.display = 'flex';
    });
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
}

export async function initSwiper(resourceId: string, blobBaseUrl: string, config: string = 'hero', count: number= null): Promise<void> {

  const wrapper = document.querySelector('.swiper-wrapper');
  if (!wrapper) {
    console.error('[Swiper] Swiper wrapper not found');
    return;
  }

  const swiper = createSwiper(config);
  if (!swiper) return;

  let images = await fetchImages(resourceId, blobBaseUrl);
  if(count){
    images = getRandomImages(images, count)
  }

  await populateSlides(wrapper, images, config);
  swiper.update();

  if(config !== 'hero') {
    setupModal();
  } 
}
