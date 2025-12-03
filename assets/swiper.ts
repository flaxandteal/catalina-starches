import * as params from '@params';
declare const Swiper: any;

const BLOB_BASE_URL = params.blob_base_url;
const SAS_TOKEN = params.blob_sas_token || '';

async function fetchImages(resourceId: string): Promise<string[]> {
  const sasParam = SAS_TOKEN ? `&${SAS_TOKEN.replace(/^\?/, '')}` : '';
  const listUrl = `${BLOB_BASE_URL}?restype=container&comp=list&prefix=images/${resourceId}/${sasParam}`;
  const response = await fetch(listUrl);
  const xml = await response.text();

  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, 'application/xml');
  const blobs = doc.querySelectorAll('Blob > Name');
  const sasQuery = SAS_TOKEN ? `?${SAS_TOKEN.replace(/^\?/, '')}` : '';
  return Array.from(blobs).map(b => `${BLOB_BASE_URL}/${b.textContent}${sasQuery}`);
}

function createSwiper(): any {
  if (typeof Swiper === 'undefined') {
    console.error('Swiper is not loaded. Make sure the Swiper CDN script is included before this script.');
    return null;
  }

  return new Swiper('.swiper', {
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
  });
}

function populateSlides(wrapper: Element, images: string[]): void {
  wrapper.innerHTML = '';
  images.forEach((imgUrl, index) => {
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    slide.innerHTML = `<img src="${imgUrl}" alt="Gallery image ${index + 1}" style="cursor:pointer;" />`;
    wrapper.appendChild(slide);
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

export async function initSwiper(resourceId: string): Promise<void> {
  const wrapper = document.querySelector('.swiper-wrapper');
  if (!wrapper) {
    console.error('Swiper wrapper not found');
    return;
  }

  const swiper = createSwiper();
  if (!swiper) return;

  const images = await fetchImages(resourceId);
  populateSlides(wrapper, images);
  swiper.update();
  setupModal();
}
