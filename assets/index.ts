import { blob } from 'node:stream/consumers';
import { initSwiper } from './swiper';

const bannerImages = [
    { name: "600209 - Old Museum Building - 20090612 from E 010s.jpg", alt: "600209 - Old Museum Building" },
    { name: "600242 - Home - 20240510_121923.jpg", alt: "600242 - Home" },
    { name: "600432 - Raine Island Beacon - (EHP) - l.rai.90.205.11.7s.jpg", alt: "600432 - Raine Island Beacon" },
    { name: "600432_Raine Island Beacon (2015)_085.jpg", alt: "600432 - Raine Island Beacon" },
    { name: "600432_Raine Island Beacon (2015)_101.jpg", alt: "600432 - Raine Island Beacon" },
    { name: "600458 - Carcory Homestead Ruins (2016) -020.jpg", alt: "600458 - Carcory Homestead Ruins" },
    { name: "602825 Oribin Studio streetscape views (2012) - Explorer.jpg", alt: "602825 - Oribin Studio" },
    { name: "645612 - Mount Elliott Mining Complex - 3.jpg", alt: "645612 - Mount Elliott Mining Complex" },
    { name: "645612 - Mount Elliott Mining Complex - Smelter precinct.jpg", alt: "645612 - Mount Elliott Mining Complex" },
    { name: "650004 - Maroon State School - Teaching Blg looking SE_2015_1_public_SQUARE.jpg", alt: "650004 - Maroon State School" }
]

initSwiper(bannerImages, 'img').then(() => document.querySelector('.hero-banner')?.classList.add('loaded'));
