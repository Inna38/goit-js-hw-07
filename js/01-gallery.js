import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", onGalleryClick);

const markup = galleryItems
  .map(
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
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

function onGalleryClick(e) {
  e.preventDefault();
  const currentImg = e.target.dataset.source;

  if (!e.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(
    `
 <img src="${currentImg}" width="800" height="600">
 `,
    {
      onShow: (instance) => {},
      onClose: (instance) => {},
    }
  );
  instance.show();

  gallery.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
      return;
    }
  });
}
