const container = document.querySelector(".container");
const mainImage = document.querySelector(".main-image");
const thumbs = document.querySelectorAll(".thumb");

container.addEventListener("click", function (e) {
  // cek apakah yang di klik adalah thumbnail
  if (e.target.className == "thumb") {
    mainImage.src = e.target.src;
    mainImage.classList.add("fade");
    setTimeout(function () {
      mainImage.classList.remove("fade");
    }, 500);

    thumbs.forEach(function (thumb) {
      // if(thumb.classList.contains('active')){
      //   thumb.classList.remove('active')
      // }
      thumb.className = "thumb";
    });

    e.target.classList.add("active");
  }
});
