import { blob } from 'node:stream/consumers';
import { initSwiper } from './swiper';

const blobName = 'banner_image';

initSwiper(blobName).then(() => document.querySelector('.hero-banner')?.classList.add('loaded'));