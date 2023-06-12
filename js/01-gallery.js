import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryEl = document.querySelector(".gallery");

const createGalleryFunc = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
);
galleryEl.insertAdjacentHTML("beforeend", createGalleryFunc.join(""));

galleryEl.addEventListener("click", showImgHandler);

function showImgHandler(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.sourse}" width="800" height="600">
`);

  instance.show();
}
