for (let i = 0; i < 6; i++) {
  console.log('Da ba dee da ba daa', i);
}

for (let i = 25; i >= 0; i -= 5) {
  console.log(i);
}
// Inisialisasi: let i = 25;
// Kita mulai dengan mendeklarasikan variabel i dan menginisialisasinya dengan nilai 25. Ini adalah nilai awal dari perhitungan kita.
// Kondisi: i >= 0;
// Loop akan terus berjalan selama i lebih besar atau sama dengan 0. Ini memastikan bahwa kita tidak mencetak angka negatif.
// Pembaruan: i -= 5;
// Setiap kali loop diulang, kita mengurangi nilai i sebesar 5. Ini adalah langkah pengurangan yang akan membawa kita ke angka berikutnya dalam urutan yang diinginkan.
// Aksi dalam Loop: console.log(i);
// Di dalam tubuh loop, kita menggunakan console.log(i); untuk mencetak nilai i saat ini ke konsol. Ini akan mencetak angka yang sedang dihitung.

const people = ['Scooby', 'Velma', 'Daphne', 'Shaggy', 'Fred'];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].toUpperCase());
}
// Deklarasi Array:
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// Di sini, kita mendeklarasikan sebuah array bernama people yang berisi lima string, masing-masing mewakili nama karakter.
// For Loop:
// for (let i = 0; i < people.length; i++) {
// Kita menggunakan loop for untuk mengiterasi melalui elemen-elemen dalam array.
// Inisialisasi let i = 0 berarti kita mulai dari indeks pertama (0).
// i < people.length adalah kondisi yang memastikan loop akan terus berjalan selama i kurang dari panjang array (jumlah elemen dalam array).
// i++ berarti kita akan menambah nilai i sebesar 1 setelah setiap iterasi, sehingga kita akan bergerak ke elemen berikutnya dalam array.
// Mengakses dan Mengubah Elemen:
// people[i].toUpperCase()
// Di dalam tubuh loop, kita menggunakan people[i] untuk mengakses elemen array pada indeks i.
// .toUpperCase() adalah metode yang mengubah string menjadi huruf kapital.
// Mencetak Nama:
// console.log(...)
// Kita menggunakan console.log() untuk mencetak hasil yang telah diubah ke huruf kapital ke konsol.
