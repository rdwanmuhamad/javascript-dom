// DOM Selection

// getElementById mengembalikan element
const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "#ccc";
judul.innerHTML = "Hello, Muhamad Ridwan";

// getElementByTagName mengembalikan HTMLCollection
const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontSize = "50px";

// getElementByClassName mengembalikan HTMLCollection
const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari javascript";

// querySelector menghasilkan element
const p4 = document.querySelector("#b p");
p4.style.color = "orange";

const li2 = document.querySelector("section#b ul li:nth-child(2)");
li2.style.backgroundColor = "green";

// querySelectorAll memilih semua element yang ada dihalaman
const allParagraf = document.querySelectorAll("p");
for (let i = 0; i < allParagraf.length; i++) {
  allParagraf[i].style.backgroundColor = "salmon";
}

// node root mempersempit selection
const sectionB = document.querySelector("section#b");
const selectp4 = sectionB.getElementsByTagName("p")[0];
selectp4.style.backgroundColor = "red";
