// const numbers = [4, 6, 8, 10];
// const output = [];

// function doubleOld(number) {
//     return number * 2;
// }

const numbers = [4, 6, 8, 10];
const output = [];
const doubleIt = number => number * 2;
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
// console.log(output);


// map() function 
// const num = [2, 3, 4, 5, 6, 7];
// const doubleIt2 = num => num * 2;
// const output2 = num.map(doubleIt2);
// console.log(output2);

// map() func short 
const num = [2, 3, 4, 5, 6, 7];
console.log(num.map(x => x * 2));

const square = num.map(x => x * x);
console.log(square);


