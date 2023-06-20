import { galleryItems } from "./gallery-items.js";
// Change code below this line

let gallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item" >
   <a class="gallery__link" href="${original}" >
      <img class="gallery__image" src="${preview} "data-alt="${description}" 
      title="${description}" caption-position="top"
        />
      
   </a>
</li>`
  )
  .join("");

gallery.insertAdjacentHTML("beforeend", markup);

gallery = new SimpleLightbox(".gallery a");
gallery.on("show.simplelightbox", function () {
  gallery.options.captionDelay = 250;
});
