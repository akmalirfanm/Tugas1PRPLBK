import { data } from "./data.js";

const inputnya = document.getElementById("inputnya");
const hasilnya = document.getElementsByClassName("hasilnya");
let timer = null;

inputnya.addEventListener("keyup", (event) => {
  if (timer) clearTimeout(timer);
  timer = setTimeout(function () {
    const tugasnya = data.filter(
      (item) => item.nim.toString() === event.target.value
    );
    console.log(tugasnya);
    if (tugasnya !== undefined)
      tugasnya.map((item) =>
        newItem(
          item.nama_lengkap,
          item.nama_panggilan,
          item.nomor_telepon,
          item.id_line,
          item.nim,
          item.email,
          item.hobi
        )
      );
    if (event.target.value === "" || tugasnya.length === 0) {
      const warning = document.createElement("p");
      warning.innerText = "Data tidak ditemukan mas mba !";
      hasilnya[0].innerHTML = "";
      hasilnya[0].append(warning);
    }
    timer = null;
  }, 1000);
});

function newItem(fullName, name, telp, line, nim, email, hobi) {
  hasilnya[0].innerHTML = "";
  const containerFullName = document.createElement("p");
  containerFullName.innerText = "Nama Lengkap : " + fullName;
  const containerName = document.createElement("p");
  containerName.innerText = "Nama Panggilan : " + name;
  const containerTelp = document.createElement("p");
  containerTelp.innerText = "Nomor Telepon : " + telp;
  const containerLine = document.createElement("p");
  containerLine.innerText = "ID Line : " + line;
  const containerNim = document.createElement("p");
  containerNim.innerText = "NIM : " + nim;
  const containerEmail = document.createElement("p");
  containerEmail.innerText = "Email : " + email;
  const containerHobi = document.createElement("p");
  containerHobi.innerText = "Hobi : " + hobi;

  hasilnya[0].append(
    containerFullName,
    containerName,
    containerTelp,
    containerLine,
    containerNim,
    containerEmail,
    containerHobi
  );
}
