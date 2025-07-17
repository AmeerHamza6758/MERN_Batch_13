// Variables scope
// Global --function scope // block-level

// var 
// let
// const

var myName = new String("Xyz")
myName = 2345678
// console.log(myName)

// var , const, let
var $_xyz = ''
const constantValue = 'hdi';
let letValue = ''


// _, number, special character, space, 
// 
// DataTypes
// Primitive non-primitve

// 1 - Number(72637287364537289)
// 2 - String("8743938r79")
// 3 - Boolean(true / false)
// 4 - Symbol(Symbol("Xyz"))
// 5 - undefined
// 6 - null

// Non-primtive
// array=[] // index, length, 
// object={}  

//String
const name = `Ameer Hamza`
// console.log(typeof (name), 'Ye mera name ha');
// Number
const myContact = 8375899383
// console.log(myContact, typeof (myContact));

// Boolean
const isPass = false
// console.log(isPass, typeof (isPass));

// undefined
let isBucket = undefined;
// console.log(isBucket, typeof (isBucket));

// Null
let isPrice = null
// console.log(isPrice, typeof (isPrice));

// Symbol
const isSymb = Symbol("abcd")
// console.log(isSymb, typeof (isSymb));

// Non-primitive

const students = ["Bisman SB", "Ameer Hamza", "Mushaib", "Shafia",]
// console.log(students[3], typeof (students));


// Object
const employee = {
    // Key:value,
    id: 1,
    name: "Ameer Hamza",
    contact: 29837465637829,
    isValid: true
}

// console.log(employee.name);



//////////////////////////////////////////// Operators ////////////////////////////////////////////////////////////
// Arithmetic operators
// logical operators
// relational comparison operators

let basketPrice1 = 3;
let basketPrice2 = 8
let totalBasketPrice = undefined;
basketPrice1 = basketPrice1 + 2

totalBasketPrice = basketPrice1 ** basketPrice2

console.log('Total basket price is :', totalBasketPrice);

// Assignment Operators
let assign1 = 2
let assign2 = 5
let totalAssigns;
assign1 += 10
assign2 *= 3;
// Comparison operators

const stud1 = 30;
const stud2 = 10;

const result = stud2 >= stud1

// const result = stud1 !== stud2
// const result = stud1 == stud2
// const result = stud1 === stud2
console.log("Students result:", result);

// Logical operators
const val1 = true
const val2 = false

const response = !val2;
console.log(response, 'response');

// Ternary operator

// condition ? "true" : "False"

const bismanIntelligent = true;
console.log(typeof bismanIntelligent);
bismanIntelligent ? console.log('Bisman Is very Intelligent') : console.log('Bad boy');



// Conditional Statements

// if if-else if-elseif-else switch

const canndy1 = 20;
const candy2 = 20;


if (canndy1 > candy2) {
    // True
    console.log('Candy1 Price is greater than Candy2');
}
else {
    // False
    console.log('Candy2 price is greater');
}

const num1 = 20
const num2 = 30
const num3 = 50

if (num1 > num2 && num1 > num3) {
    console.log('Num1 is greater');
}
else if (num2 > num1 && num2 > num3) {
    console.log("Num2 is greater")
}
else if (num3 > num1 && num3 > num2) {
    console.log('Num3 is greater');
}
else {
    console.log('Input is not valid');
}


console.log('Kuch ni hoga');