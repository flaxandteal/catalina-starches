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

async function downloadImage(e: Event, type: string, extensions: { name: string; ext: string }[] = null): Promise<void> {
    e.preventDefault();
    const img = document.querySelector('#modal-img') as HTMLImageElement;
    let url = img.src.split('_web')[0]

    if(type === 'reduced'){
      url = `${url}_download.jpg`;
    }

    if(type === 'original' && extensions){
      const filename = img.src.split('/').pop();
      const imgName = filename.substring(0, filename.indexOf('_web'));
      const extObj = extensions.find(ext => ext.name === imgName);
      if(extObj){
        url = `${url}.${extObj.ext}`;
      }
    }

    console.log("Downloading from URL:", url)

    if (!url) return;

    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = url.split('/').pop();
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error('Download failed:', error);
      window.open(url, '_blank');
    }
}

function setupModal(extensions: { name: string; ext: string }[]): void {
  const modal = document.getElementById('image-modal') as HTMLElement;
  const modalImg = document.getElementById('modal-img') as HTMLImageElement;
  const modalCaption = document.getElementById('modal-caption') as HTMLElement;
  const closeModal = document.getElementById('close-modal') as HTMLElement;
  const downloadOriginalLink = modal?.querySelector('#download-original-image') as HTMLAnchorElement;
  const downloadReducedLink = modal?.querySelector('#download-reduced-image') as HTMLAnchorElement;

  if (!modal || !modalImg || !closeModal) {
    console.error('Modal elements not found');
    return;
  }

  // Handle download button click
  if (downloadOriginalLink) {
    downloadOriginalLink.addEventListener('click', (e) => downloadImage(e, 'original', extensions));
  }

  if (downloadReducedLink) {
    downloadReducedLink.addEventListener('click', (e) => downloadImage(e, 'reduced'));
  }

  document.querySelectorAll('.swiper-slide img').forEach(img => {
    img.addEventListener('click', function () {
      const imgSrc = (this as HTMLImageElement).src;
      modalImg.src = imgSrc;
      modalImg.alt = img.getAttribute('alt') || '';
      modal.style.display = 'flex';
      modalCaption.textContent = modalImg.alt;
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

  // Store the original extensions for download links
  const originalImages = images.filter(url => !url.includes('_web') && !url.includes('_download'));
  const extensions = originalImages.map(url => {
    const filename = url.split('/').pop();
    const lastDot = filename.lastIndexOf('.');
    return {
      name: filename.substring(0, lastDot),
      ext: filename.substring(lastDot + 1)
    };
  });

  // Only include web-optimized images
  images = images.filter(url => url.includes('_web'));
  

  if (count) {
    images = getRandomImages(images, parseInt(count));
  }

  await populateSlides(wrapper, images, config);

  // Create swiper AFTER slides are populated
  const swiper = createSwiper(config);
  if (!swiper) return;

  if (showModal === 'true') {
    setupModal(extensions);
  }

  container.classList.add('loaded');
}
