var arr = [2,5,6,9,5];
var total = [];
var temp = 0;

//Menghitung total nilai dalam array
for(var i=0; i<arr.length; i++) {
  temp = temp + arr[i];
}

//Perulangan jumlah akhir temp dikurangi nilai dalam index
//Simpan nilai tiap jumlah di total
for(var j=0; j<arr.length; j++) {
  total[j] = temp - arr[j];
}

//Mencari nilai maksimum dan minimum dari total
var min = total[0], max = total[0];
for(var k=0; k<arr.length; k++) {
  if(total[k] > max) {
    max = total[k];
  }

  if(total[k] < min) {
    min = total[k];
  }
}

//Output hasil
console.log(total);
console.log("max:", max,"-", "min:", min);