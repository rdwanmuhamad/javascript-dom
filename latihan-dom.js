// studi kasus pertama
const btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  //   document.body.style.backgroundColor = "#3AA6B9";
  //   document.body.setAttribute('class', 'color-background')
  document.body.classList.toggle("color-background");
});

// studi kasus kedua
const btnRandom = document.createElement("button");
const textBtn = document.createTextNode("Random");

btnRandom.appendChild(textBtn);
btnRandom.setAttribute("type", "button");
btnRandom.setAttribute("id", "btn-random");

btn.after(btnRandom);

btnRandom.addEventListener("click", function () {
  const r = Math.round(Math.random() * 255 * 1);
  const g = Math.round(Math.random() * 255 * 1);
  const b = Math.round(Math.random() * 255 * 1);
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + " )";
});

// studi kasus ketiga
const sliderMerah = document.querySelector("input[name=slider-merah]");
const sliderHijau = document.querySelector("input[name=slider-hijau]");
const sliderBiru = document.querySelector("input[name=slider-biru]");
sliderMerah.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + " )";
});

sliderHijau.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + " )";
});

sliderBiru.addEventListener("input", function () {
  const r = sliderMerah.value;
  const g = sliderHijau.value;
  const b = sliderBiru.value;
  document.body.style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + " )";
});

// studi kasus keempat
document.body.addEventListener("mousemove", function (e) {
  // posisi mouse
  // console.log(e.clientX);
  // console.log(e.clientY);
  // ukuran browser
  // console.log(window.innerWidth);

  const x = Math.round((e.clientX / window.innerWidth) * 255 * 1);
  const y = Math.round((e.clientY / window.innerHeight) * 255 * 1);
  document.body.style.backgroundColor =
    "rgb(" + x + ", " + y + ", " + 100 + " )";
});
