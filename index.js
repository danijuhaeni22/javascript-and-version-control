// Buatlah 100 nilai random (1 sampai 50) pada 1 array
const nilaiRandom = [];
let angkaGenap = 0;
let angkaGanjil = 0;

while (nilaiRandom.length < 100) {
  const acakAngka = Math.floor(Math.random() * 50) + 1;
  if (acakAngka % 2 === 0 && angkaGenap < 50) {
    nilaiRandom.push(acakAngka);
    angkaGenap++;
  } else if (acakAngka % 2 !== 0 && angkaGanjil < 50) {
    nilaiRandom.push(acakAngka);
    angkaGanjil++;
  }
}

// Pecahlah menjadi 2 array berdasarkan indexnya, yakni array pada index genap dan array pada index ganjil, gunakan method push() untuk menambahkan nilai baru pada array
let indexGenap = [];
let indexGanjil = [];

for (i = 0; i < nilaiRandom.length; i++) {
  if (nilaiRandom[i] % 2 == 0) {
    indexGenap.push(nilaiRandom[i]);
  } else {
    indexGanjil.push(nilaiRandom[i]);
  }
}

// Gunakan 2 array yang telah dibuat untuk mendapatkan min
function nilaiMin(nilai) {
  let nilaiMin = nilai[0];
  for (i = 0; i < nilai.length; i++) {
    if (nilai[i] < nilaiMin) {
      nilaiMin = nilai[i];
    }
  }
  return nilaiMin;
}

// Gunakan 2 array yang telah dibuat untuk mendapatkan max
function nilaiMax(nilai) {
  let nilaiMax = nilai[0];
  for (i = 0; i < nilai.length; i++) {
    if (nilai[i] > nilaiMax) {
      nilaiMax = nilai[i];
    }
  }
  return nilaiMax;
}

// Gunakan 2 array yang telah dibuat untuk mendapatkan total
function nilaiTotal(nilai) {
  let nilaiTotal = 0;
  for (i = 0; i < nilai.length; i++) {
    nilaiTotal += nilai[i];
  }
  return nilaiTotal;
}

// Gunakan 2 array yang telah dibuat untuk mendapatkan nilai rata-rata
function nilaiRataRata(total, indexGenap) {
  return total / indexGenap.length;
}

console.log("100 nilai Random 1 sampai 50", nilaiRandom);
console.log("Index Nilai Genap", indexGenap);
console.log("Index Nilai Ganjil", indexGanjil);

let minGenap = nilaiMin(indexGenap);
console.log("Nilai min pada index genap", minGenap);

let minGanjil = nilaiMin(indexGanjil);
console.log("Nilai min pada index ganjil", minGanjil);

let maxGenap = nilaiMax(indexGenap);
console.log("Nilai max pada index genap", maxGenap);

let maxGanjil = nilaiMax(indexGanjil);
console.log("Nilai max pada index ganjil", maxGanjil);

let totalGenap = nilaiTotal(indexGenap);
console.log("Nilai Total pada array index genap", totalGenap);

let totalGanjil = nilaiTotal(indexGanjil);
console.log("Nilai Total pada array index ganjil", totalGanjil);

let rataRataGenap = nilaiRataRata(totalGenap, indexGenap);
console.log("Nilai Rata Rata pada array index genap", rataRataGenap);

let rataRataGanjil = nilaiRataRata(totalGanjil, indexGanjil);
console.log("Nilai Rata Rata pada array index ganjil", rataRataGanjil);

// Bandingkan kedua buah array
let perbandingan = [];

// Perbandingan nilai min ganjil dan genap
if (minGenap > minGanjil) {
  perbandingan.push("Nilai Minimum lebih besar pada array index Genap");
} else if (minGenap < minGanjil) {
  perbandingan.push("Nilai Minimum lebih besar pada array index Ganjil");
} else {
  perbandingan.push("Nilai Minimum sama pada array index Genap dan Ganjil");
}

// Perbandingan nilai max ganjil dan genap
if (maxGenap > maxGanjil) {
  perbandingan.push("Nilai Maksimum lebih besar pada array index Genap");
} else if (maxGenap < maxGanjil) {
  perbandingan.push("Nilai Maksimum lebih besar pada array index Ganjil");
} else {
  perbandingan.push("Nilai Maksimum sama pada array index Genap dan Ganjil");
}

// Perbandingan nilai total ganjil dan genap
if (totalGenap > totalGanjil) {
  perbandingan.push("Total lebih besar pada array index Genap");
} else if (totalGenap < totalGanjil) {
  perbandingan.push("Total lebih besar pada array index Ganjil");
} else {
  perbandingan.push("Total sama pada array index Genap dan Ganjil");
}

// Perbandingan nilai rata rata ganjil dan genap
if (rataRataGenap > rataRataGanjil) {
  perbandingan.push("Rata-rata lebih besar pada array index Genap");
} else if (rataRataGenap < rataRataGanjil) {
  perbandingan.push("Rata-rata lebih besar pada array index Ganjil");
} else {
  perbandingan.push("Rata-rata sama pada array index Genap dan Ganjil");
}

console.log("Perbandingan: ", perbandingan);
