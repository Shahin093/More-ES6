//32-3 (advanced) Array Destructuring, nested object Optional chaining

// declaer variable based on the name of an object property
const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
// console.log(myObject?.p?.q);
const { x, b } = myObject;
// console.log(x, b);

// destruturing array 
const [p, q] = [45, 37];
// console.log(p, q);


const [best, faltu] = ['Momotaj', 56];
// console.log(faltu, best);

const { sky, soil } = { sky: 'blue', soil: 'mati', color: 'red', money: 500 };
// console.log(sky);

/// chaning 
const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        works: 'website development', employee: 22, framework: 'react',
        tech: { first: "html", second: 'css', third: 'Js' },
    }
};
const { works, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
console.log(company?.backend?.tech?.third);
console.log(works, framework, food, second, third);


