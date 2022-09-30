import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports go this line
import { galleryItems } from './gallery-items';

// Change code below this line
const galaryEl = document.querySelector('.gallery');

const galleryTemplate = galleryItems.reduce((acc, galaryItem) => acc +
    `<a class="gallery__item" href="${galaryItem.original}">
        <img class="gallery__image"
            src="${galaryItem.preview}" alt="${galaryItem.description}"
        />
    </a>`, '');

galaryEl.insertAdjacentHTML('beforeend', galleryTemplate);

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: "250" });

// console.log(SimpleLightbox);

console.log(galleryItems);
