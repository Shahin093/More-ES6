// const fish = { id: 58, name: 'King Hilsha', price: 9000, phone: '0177365763', address: 'Chandpur', dress: 'silver' };
// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

// const { phone, price, dress, id } = fish;
// console.log(phone, id);

// console.log(phone);
// console.log(phone);
// console.log(phone, dress);
// console.log(phone);


// Destruturing object 
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
console.log(works, framework, food, second, third);


