class Support {
    name;
    designation = 'Support We Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "start a support session");
    }
}
const demo = new Support('Shahin').startSession();


const amir = new Support('amir', 'Bangladesh');
const salman = new Support('salman', "Englend");
// console.log(salman);
// console.log(amir);