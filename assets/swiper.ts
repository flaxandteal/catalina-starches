import Swiper from 'swiper/bundle';

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
    loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
      el: ".swiper-pagination",
    },
  }
}

function createSwiper(config: string): any {
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

export async function initSwiper(blobLocation: string): Promise<void> {
  const container = document.querySelector('.swiper') as HTMLElement;
  if (!container) {
    console.error('[Swiper] Swiper container not found');
    return;
  }

  const wrapper = container.querySelector('.swiper-wrapper');
  if (!wrapper) {
    console.error('[Swiper] Swiper wrapper not found');
    return;
  }

  const { blobUrl, config = 'hero', showModal, count } = container.dataset;
  let images = await fetchImages(blobLocation, blobUrl);
  if (count) {
    images = getRandomImages(images, parseInt(count));
  }

  await populateSlides(wrapper, images, config);

  // Create swiper AFTER slides are populated
  const swiper = createSwiper(config);
  if (!swiper) return;

  if (showModal === 'true') {
    setupModal();
  }

  container.classList.add('loaded');
}
