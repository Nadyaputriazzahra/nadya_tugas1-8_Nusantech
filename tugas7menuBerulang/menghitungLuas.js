let stop = false;
function selesai() {
  alert("Terimakasih");
  return;
}

function showMenu() {
  while (!stop) {
    const menu = prompt("Option:\n1. Luas Persegi\n2. Luas Lingkaran");
    if (menu === null || menu === "3") {
      alert("Terimakasih");
      return;
    }
    switch (menu) {
      case "1":
        hitungLuasPersegi();
        break;
      case "2":
        hitungLuasLingkaran();
        break;
      default:
        alert("Menu tidak valid. Silakan pilih menu yang tersedia.");
    }
  }
}

function hitungLuasPersegi() {
  // let stop = false;
  while (!stop) {
    let input = prompt(
      "Masukkan nilai sisi untuk menghitung luas\n*masukkan angka!"
    );
    if (input === null) return;
    input = parseFloat(input);
    switch (true) {
      case isNaN(input):
        alert("Masukkan tidak valid. Silakan coba lagi.");
        break;
      default:
        const luasPersegi = input * input;
        alert("Luas persegi dengan sisi " + input + " adalah " + luasPersegi);
    }
    stop = confirm("Apakah Anda ingin menghitung luas persegi lagi?");
    if (!stop) {
      stop = true;
      selesai();
    } else {
      stop = false;
    }
  }
}

function hitungLuasLingkaran() {
  // let stop = false;
  while (!stop) {
    let input = prompt("Masukkan nilai jari-jari lingkaran:\n*masukkan angka!");
    if (input === null) return;
    input = parseFloat(input);
    switch (true) {
      case isNaN(input):
        alert("Masukkan tidak valid. Silakan coba lagi.");
        break;
      default:
        const luasLingkaran = (22 / 7) * Math.pow(input, 2);
        const luasLingkaran1 = 3.14 * Math.pow(input, 2);
        let pembagi = 7;
        let luasLingkaran2 = input % pembagi;

        if (luasLingkaran2 == 0) {
          alert(
            "Luas lingkaran dengan jari-jari " +
              input +
              " adalah " +
              luasLingkaran.toFixed(0)
          );
        } else {
          alert(
            "Luas lingkaran dengan jari-jari " +
              input +
              " adalah " +
              luasLingkaran.toFixed(2)
          );
        }
    }
   stop = confirm("Apakah Anda ingin menghitung luas lingkaran lagi?");
   if (!stop) {
    stop = true;
    selesai()
   } else {
    stop = false;
   }
  }
}

showMenu();
