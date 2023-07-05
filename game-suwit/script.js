function computer() {
  // menangkap pilihan computer
  // membangkitkan bilangan random
  const comp = Math.random();

  if (comp < 0.34) {
    return "gajah";
  }
  if (comp >= 0.34 && comp < 0.67) {
    return "orang";
  }
  return "semut";
}

function getHasil(computer, player) {
  // menentukan rules
  if (player == computer) {
    return "SERI!";
  }
  if (player == "gajah") {
    return computer == "orang" ? "MENANG!" : "KALAH!";
  }
  if (player == "orang") {
    return computer == "gajah" ? "KALAH!" : "MENANG!";
  }
  if (player == "semut") {
    return computer == "orang" ? "KALAH" : "MENANG!";
  }
}

// const playerGajah = document.querySelector(".gajah");
// playerGajah.addEventListener("click", function () {
//   const pilihanComputer = computer();
//   const pilihanPlayer = playerGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("computer " + pilihanComputer);
//   console.log("player " + pilihanPlayer);
//   console.log("hasil " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const playerOrang = document.querySelector(".orang");
// playerOrang.addEventListener("click", function () {
//   const pilihanComputer = computer();
//   const pilihanPlayer = playerOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("computer " + pilihanComputer);
//   console.log("player " + pilihanPlayer);
//   console.log("hasil " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

// const playerSemut = document.querySelector(".semut");
// playerSemut.addEventListener("click", function () {
//   const pilihanComputer = computer();
//   const pilihanPlayer = playerSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   console.log("computer " + pilihanComputer);
//   console.log("player " + pilihanPlayer);
//   console.log("hasil " + hasil);

//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", pilihanComputer + ".png");

//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });

function loader() {
  const imgCompter = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const mulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - mulai > 100) {
      clearInterval;
      return;
    }
    imgCompter.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = computer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // console.log("computer " + pilihanComputer);
    // console.log("player " + pilihanPlayer);
    // console.log("hasil " + hasil);

    loader();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/"+ pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// var tanya = true;
// while (tanya) {
//   // menangkap pilihan player
//   var p = prompt("pilih : gajah, semut, orang");

//   // menangkap pilihan computer
//   // membangkitkan bilangan random
//   var comp = Math.random();

//   if (comp < 0.34) {
//     comp = "gajah";
//   } else if (comp >= 0.34 && comp < 0.67) {
//     comp = "orang";
//   } else {
//     comp = "semut";
//   }

//   // menentukan rules
//   var hasil = "";
//   if (p == comp) {
//     hasil = "SERI!";
//   } else if (p == "gajah") {
//     hasil = comp == "orang" ? "MENANG!" : "KALAH!";
//   } else if (p == "orang") {
//     hasil = comp == "gajah" ? "KALAH!" : "MENANG!";
//   } else if (p == "semut") {
//     hasil = comp == "orang" ? "KALAH" : "MENANG!";
//   } else {
//     hasil = "memasukkan pilihan yang salah!";
//   }

//   // tampilkan hasilnya
//   alert(
//     "Kamu memilih : " +
//       p +
//       " dan Komputer memilih : " +
//       comp +
//       "\nMaka hasilnya : Kamu " +
//       hasil
//   );

//   tanya = confirm("lagi?");
// }

// alert("terimakasih sudah bermain.");
