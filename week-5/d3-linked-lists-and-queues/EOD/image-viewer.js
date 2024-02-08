import IDLL from "./IDLL.js";

const kittens = new IDLL();
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642607318/kittens/kitten1_gbur2r.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642607405/kittens/kitten2_mjar88.png"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642607472/kittens/kitten3_rc4kut.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642608508/kittens/kitten4_invlwr.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642609136/kittens/kitten5_kq7adi.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642609731/kittens/kitten6_ixmk2b.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642610764/kittens/kitten7_zekvxp.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642614229/kittens/kitten8_xrzadr.jpg"
);
kittens.addToTail(
  "https://res.cloudinary.com/app-academy4/image/upload/v1642614772/kittens/kitten9_dkfykp.jpg"
);
// kittens.addToTail();

//  Potentially scary code we haven't learned about yet below...
const nullImage =
  "https://res.cloudinary.com/app-academy4/image/upload/v1629224425/puppies/null_ghib1q.png";
const mainImageLoc = document.getElementById("current-image");
const nextImageLoc = document.getElementById("next-image");
const prevImageLoc = document.getElementById("previous-image");
const addToHeadButton = document.getElementById("add-head-button");
const addToTailButton = document.getElementById("add-tail-button");
const fileInputField = document.getElementById("file-url-input");
const deleteFromHead = document.getElementById("delete-head");
const deleteFromTail = document.getElementById("delete-tail");

// update function sets new image values
const update = (mainImage, nextImage, prevImage) => {
  mainImageLoc.setAttribute("src", mainImage.value);

  nextImage
    ? nextImageLoc.setAttribute("src", nextImage.value)
    : nextImageLoc.setAttribute("src", nullImage);

  prevImage
    ? prevImageLoc.setAttribute("src", prevImage.value)
    : prevImageLoc.setAttribute("src", nullImage);

  // if (nextImage){
  //     nextImageLoc.setAttribute("src", nextImage.value);
  // } else {
  //     nextImageLoc.setAttribute("src", nullImage);
  // }
  // if (prevImage){
  //     prevImageLoc.setAttribute("src", prevImage.value);
  // } else {
  //     prevImageLoc.setAttribute("src", nullImage);
  // }
};

window.addEventListener("DOMContentLoaded", () => {
  let pointer = kittens.peekAtHead();

  let mainImage = kittens.peekAtHead();
  console.log(mainImage);
  let nextImage = mainImage.next;
  console.log(nextImage);
  let prevImage = mainImage.prev;
  console.log(prevImage);

  update(mainImage, nextImage, prevImage);

  document
    .getElementById("previous-button")
    .addEventListener("click", (event) => {
      // Previous button logic
      console.log("previous button clicked");
      if (pointer.prev === null) return;
      pointer = pointer.prev;
      nextImage = mainImage;
      mainImage = prevImage;
      prevImage = pointer.prev;
      console.log("mainImage", mainImage);
      console.log("nextImage", nextImage);
      console.log("prevImage", prevImage);
      update(mainImage, nextImage, prevImage);
    });

  document.getElementById("next-button").addEventListener("click", (event) => {
    // Next button logic
    console.log("next button clicked");
    if (pointer.next === null) return;
    pointer = pointer.next;
    prevImage = mainImage;
    mainImage = nextImage;
    nextImage = pointer.next;
    console.log("mainImage", mainImage);
    console.log("nextImage", nextImage);
    console.log("prevImage", prevImage);
    update(mainImage, nextImage, prevImage);
  });
  addToHeadButton.addEventListener("click", (event) => {
    // Adds new image to head when button is clicked
    kittens.addToHead(fileInputField.value);
    fileInputField.value = "";
  });

  addToTailButton.addEventListener("click", (event) => {
    // Adds new image to tail when button is clicked
    kittens.addToTail(fileInputField.value);
    fileInputField.value = "";
  });

  deleteFromHead.addEventListener("click", (event) => {
    // Deletes the image from the head
    kittens.removeFromHead();
  });

  deleteFromTail.addEventListener("click", (event) => {
    // Deletes the image from the tail
    kittens.removeFromTail();
  });
});
