document.getElementById("simpan").addEventListener(
    "click",
    function () {
      let nama = document.getElementById("nama").value;
      let npm = document.getElementById("npm").value;
      let mhs = { nama: nama, npm: npm };
      let listmhs = [];
      if (localStorage.getItem("mhs")) {
        listmhs = JSON.parse(localStorage.getItem("mhs"));
        listmhs.push(mhs);
      } else {
        listmhs.push(mhs);
      }
      localStorage.setItem("mhs", JSON.stringify(listmhs));
      let data = "";
      for (const [idx, dt] of listmhs.entries()) {
        data +=
          "<tr>" +
          "<th scope='row'>" +
          (idx + 1) +
          "</th>" +
          "<td>" +
          dt.npm +
          "</td>" +
          "<td>" +
          dt.nama +
          "</td>" +
          "</tr>";
      }
      document.getElementById("data").innerHTML = data;
    },
    true
  );
  document.getElementById("simpan").addEventListener(
    "click",
    function() {
      let nama = document.getElementById("nama").value;
      let npm = document.getElementById("npm").value;
      let mhs = {
        nama: nama,
        npm: npm
      };
      let listmhs = [];
      if (localStorage.getItem("mhs")) {
        listmhs = JSON.parse(localStorage.getItem("mhs"));
        listmhs.push(mhs);
      } else {
        listmhs.push(mhs);
      }
      localStorage.setItem("mhs", JSON.stringify(listmhs));
      let data = "";
      for (const [idx, dt] of listmhs.entries()) {
        data +=
          "<tr>" +
          "<th scope='row'>" +
          (idx + 1) +
          "</th>" +
          "<td>" +
          dt.npm +
          "</td>" +
          "<td>" +
          dt.nama +
          "</td>" +
          "</tr>";
      }
      document.getElementById("data").innerHTML = data;
    },
    true
  );

  document.getElementById("hapus").addEventListener(
    "click",
    function () {
      let listmhs = [];
      if (localStorage.getItem("mhs")) {
        listmhs = JSON.parse(localStorage.getItem("mhs"));
      }
      if (listmhs.length > 0) {
        listmhs.pop();
        
        localStorage.setItem("mhs", JSON.stringify(listmhs));
        
        let data = "";
        for (const [idx, dt] of listmhs.entries()) {
          data +=
            "<tr>" +
            "<th scope='row'>" +
            (idx + 1) +
            "</th>" +
            "<td>" +
            dt.npm +
            "</td>" +
            "<td>" +
            dt.nama +
            "</td>" +
            "</tr>";
        }
        document.getElementById("data").innerHTML = data;
      } else {
        console.log("No student to delete.");
      }
    },
  true
);