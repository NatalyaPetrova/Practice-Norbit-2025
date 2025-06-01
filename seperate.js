function seperate(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

console.log(seperate(1000));
console.log(seperate(10000.23));
console.log(seperate(100000123908));


