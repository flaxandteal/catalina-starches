import { initSwiper } from './swiper';
import * as params from '@params';

window.addEventListener('DOMContentLoaded', async function() {
  await initSwiper('banner_image', params.blob_base_url, params.config, 5);
  document.querySelector('.hero-banner')?.classList.add('loaded');
})

