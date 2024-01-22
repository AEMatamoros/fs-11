import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryContainer = document.querySelector(".gallery");
console.log(galleryContainer);

function createGallery(galleryItems) {
  //   let htmlString = "";
  //   galleryItems.forEach(({ preview, original, description }) => {
  //     htmlString += `<li class="gallery__item">
  //         <a class="gallery__link" href="${original}g">
  //           <img
  //             class="gallery__image"
  //             src="${preview}"
  //             data-source="large-image.jpg"
  //             alt="${description}"
  //           />
  //         </a>
  //       </li>`;
  //   });
  //   return htmlString;
  return galleryItems
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
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
    .join(" ");
}

galleryContainer.insertAdjacentHTML("afterbegin", createGallery(galleryItems));

// Add on click Event
galleryContainer.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  //   console.log(e.target.nodeName);
  if (e.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${e.target.dataset.source}" alt="${e.target.alt}">
    </div>
  `);

  instance.show();
  //Close on escape press
  document.addEventListener("keydown", onClose);
  function onClose(e) {
    if (e.code !== "Escape" && basicLightbox.visible()) {
      return;
    }
    instance.close();
    document.removeEventListener("keydown", onClose);
  }
}
