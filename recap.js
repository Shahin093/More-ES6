const myFriend = 'omor sani';
let habby = 'shidul '; // reAssigning Variable.

// Templete String 
const myNotes = ` I am Mojnu of ${habby}. I dont have a ${myFriend} `;
console.log(myNotes);
// default Parameter
//spread operator
function maxNumber(array = []) {
    const max = Math.max(...array);
    return max;
}
console.log(maxNumber([4, 6, 3, 9]));
// arrow function 
const sum = (num1, num2) => num1 + num2;
console.log(sum(3, 4));
const square = x => x * x;
console.log(square(5));
