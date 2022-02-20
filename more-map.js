//32-5 Map string array, array of objects map, foreach

//Map string array,
const friends = ['tom hanks', 'tom Crise', 'tuhin', 'shahin', 'rubin'];
const fLenghs = friends.map(friends => friends.length);
console.log(fLenghs);


// array of objects map
const products = [
    { name: "water bottle", price: 50, color: 'yellow' },
    { name: "Mobile phobe", price: 15000, color: 'black' },
    { name: "Smart watch", price: 3000, color: 'black' },
    { name: "sticky note", price: 30, color: 'pink' },
    { name: "water glass", price: 3, color: 'white' }
];
products.forEach(products => console.log(products.color));
// const productName = products.map(products => console.log(products.price));
// console.log(productName);

