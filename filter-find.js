// const numbers = [3, 13, 7, 41, 29, 79, 30, 5, 2, 19]
//     ;
// const bigNumber = numbers.filter(Number => Number > 20);
// const smallNumber = numbers.filter(num => num < 20);
// // console.log(bigNumber);
// // console.log(smallNumber);


// const productName = products.filter(product => product.price > 100);
// const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);
// console.log(productName);
// products.forEach(products => console.log(products.color));
const products = [
    { name: "water bottle", price: 50, color: 'yellow' },
    { name: "Mobile phobe", price: 15000, color: 'black' },
    { name: "Smart watch", price: 3000, color: 'black' },
    { name: "sticky note", price: 30, color: 'pink' },
    { name: "water glass", price: 3, color: 'white' }
];
const whiteItem = products.find(product => product.color == 'pink');
console.log(whiteItem);