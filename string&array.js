// ada sebuah antrian pembeli yaitu ray, fiki, fadhilla, farah
// datang 1 pembeli yaitu nabila
// datang 2 pembeli yaitu maza dan elsi
// antrian terakhir tidak jadi antri dan pulang ke rumah
// antrian pertama sudah mendapatkan belanjaannya
// antrian kedua juga sudah mendapatkan belanjaannya
// datang pembeli baru yang nyerobot antrian yaitu tomi
// maka hasil akhirnya yaitu ...

// // Antrian Awal
// const Antrian = ['ray', 'fiki', 'fadhilla', 'farah'];
// console.log('Antrian awal:', Antrian);
// //hasil yang diharapkan ray, fiki, fadhilla, farah

// Pembeli baru datang
Antrian.push('nabila');
Antrian.push('maza');
Antrian.push('elsi');
console.log('Antrian setelah pembeli baru datang:', Antrian);
//hasil yang diharapkan ray, fiki, fadhilla, farah, nabila, maza, elsi

// Antrian terakhir tidak jadi antri
Antrian.pop();
console.log('Antrian setelah pembeli terakhir pulang:', Antrian);
//hasil yang diharapkan ray, fiki, fadhilla, farah, nabila, maza

// Antrian pertama dan kedua mendapatkan belanjaan
Antrian.shift();
Antrian.shift();
console.log('Antrian setelah pembeli pertama dan kedua selesai:', Antrian);
//hasil yang diharapkan fadhilla, farah, nabila, maza

// Pembeli baru nyerobot antrian
Antrian.unshift('tomi');
console.log('Antrian setelah pembeli nyerobot:', Antrian);
console.log('Hasil akhir:', Antrian);
//hasil yang diharapkan tomi, fadhilla, farah, nabila, maza
