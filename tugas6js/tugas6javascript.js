function printTable(data) {
    console.log("| Index   | Name    | Value | Tanggal Lahir       |");
    console.log("|---------|---------|-------|---------------------|");
  
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      let formattedDate = new Date(item.tglLahir).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  
      console.log(
        `| ${index.toString().padEnd(8)} | ${item.name.padEnd(8)} | ${item.value
          .toString()
          .padEnd(5)} | ${formattedDate.padEnd(20)} |`
      );
    }
  }
  
  let data1 = [
    { name: "aphira", value: 22, tglLahir: "desember 03, 2006" },
    { name: "nichol", value: 12, tglLahir: "November 20, 2000" },
    { name: "lana", value: 17, tglLahir: "maret 22, 2005" },
    { name: "putri", value: -12, tglLahir: "mei 12, 2005" },
    { name: "nazya", value: 10, tglLahir: "April 20, 2006" },
    { name: "tylor", value: 37, tglLahir: "September 24, 2005" },
  ];
  console.table(
    data1.sort((a, b) => new Date(a.tglLahir) - new Date(b.tglLahir))
  );
  