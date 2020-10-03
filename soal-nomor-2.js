function betweenDays(date1, date2) {
  //Inisialisasi nilai date awal
  var diffs = [];
  date1 = new Date(date1);
  date2 = new Date(date2);

  //Mencari selisih hari antara 2 tanggal
  var diffTime = Math.abs(date2 - date1);
  var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  //Perulangan untuk memasukkan hari antara 2 tanggal kedalam array
  for(var i=0; i<=diffDays; i++) {
    var date3 = new Date(date1);
    date3.setDate(date3.getDate() + i);
    var year = date3.getFullYear();
    var month = date3.getMonth() + 1;
    var day = date3.getDate();
    diffs[i] = year + "-" + month + "-" + day;
  }
  return diffs;
}

//Inisialisasi nilai untuk date dan output tanggal between 2 tgl
var date1 = '2020-09-29', date2 = '2020-10-03';
var diff = betweenDays(date1, date2);
console.log(diff);
