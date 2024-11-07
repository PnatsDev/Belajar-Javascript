function sayHello(person) {
  console.log(`Hi, $(person)`); //use `backflip` samping angka satu
}
sayHello('Ana');

//return//
function findAngka(x, y) {
  return x / y;
}

function sayHello(person) {
  console.log('hello');
} //old style

const sayHello = (person) => {
  console.log('hello');
};

function printHeart() {
  console.log(`<3`);
}
printHeart();

function multiplyAngka(x, y) {
  return x * y;
}
console.log(multiplyAngka(2, 3));
console.log(multiplyAngka(9, 9));
console.log(multiplyAngka(4, 5));

//ketika ada nilai didalam function tersebut dan didalam function tersebut
let animal = 'Giant Pacific Octopus';
function observe() {
  let animal = 'Pajama Squid';
  console.log(animal);
}
observe();
console.log(animal);

// //ketika didalam function tidak ada nilai animal, dia akan otomatis mencari nilai animal diluar function//
let Animal = 'Giant Pacific Octopus';
function observe() {
  console.log(Animal);
}
observe();

//Arrow Function
const sayHello = (x) => `Hello ${x}`;
console.log(sayHello('Hagrid'));
