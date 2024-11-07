function myFirst() {
  myDisplayer('good bye!');
}

function mySecond(callback) {
  myDisplayer('Hello');
}

function myDisplayer(message) {
  console.log(message);
}

mySecond(myFirst);

//timeout//
console.log('Paragraf 1');
setTimeout(() => {
  console.log('paragraf 2');
}, 4000);
console.log('paragraf 3');

function setTime() {
  const header = document.getElementById('header');
  header.textContent = new Date().toString();
}
setInterval(setTime, 1000);
console.log('Program Finish');

//try and catch//
function divideNumbers(a, b) {
  try {
    if (!a || !b) throw new Error('Input Kedua Parameter Harus Diisi');
    // Memeriksa apakah a dan b adalah angka
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Input harus berupa angka.');
    }

    // Memeriksa apakah b adalah nol
    if (b === 0) {
      throw new Error('Pembagian dengan nol tidak diperbolehkan.');
    }

    // Melakukan pembagian
    const result = a / b;
    return result;
  } catch (error) {
    // Menangkap dan menampilkan pesan kesalahan
    console.error('Terjadi kesalahan:', error.message);
  }
}

// // Contoh penggunaan
// console.log(divideNumbers(10, 2)); // Output: 5
// console.log(divideNumbers(10, 0)); // Output: Terjadi kesalahan: Pembagian dengan nol tidak diperbolehkan.
// console.log(divideNumbers(10, 'a')); // Output: Terjadi kesalahan: Input harus berupa angka.
