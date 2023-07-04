// DDM Manipulation

// innerHTML
// const judul = document.getElementById("judul");
// judul.innerHTML = "<h5>Hello, Muhamad Ridwan</h5>";

// const sectionA = document.querySelector("section#a");
// sectionA.innerHTML = "<p>Hello, World!</p>";

// element.style.<propetiCSS>
// judul.style.color = "lightblue";
// judul.style.backgroundColor = "salmon";

// elementGetAttribute
// judul.setAttribute("name", "title");
// const a = document.querySelector("a");
// a.setAttribute('id', 'link')

// element.classList
// judul.classList.add("label", "test", "test2");
// judul.classList.remove("label");
// judul.classList.toggle("label");
// judul.classList.item(2)
// judul.classList.contains(2)
// judul.classList.replace('test', 'test1')

// manipulasi node

// buat elemen baru
// createELement dan createTextNode
const pBaru = document.createElement("p");
const teksPBaru = document.createTextNode("Paragraf Baru");
// simpan tulisan ke dalam paragraf menggunakan appendChild
pBaru.appendChild(teksPBaru);
// simpan pBaru di akhir Section A menggunakan appendChild
const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// createELement dan createTextNode
const liBaru = document.createElement("li");
const teksLiBaru = document.createTextNode("item baru");
// simpan tulisan ke dalam paragraf menggunakan appendChild
liBaru.appendChild(teksLiBaru);
// simpan setelah item 1 menggunakan insertBefore
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// removeChild
const link = document.getElementsByTagName("a")[0];
sectionA.removeChild(link);

// replaceChild
const sectionB = document.getElementById("b");
const p4 = sectionB.querySelector("p");

const h2 = document.createElement("h2");
const teksh2 = document.createTextNode("Judul Baru");

h2.appendChild(teksh2);
sectionB.replaceChild(h2, p4);
