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

// Switch

// switch (expression) {
//     case expression:
//         console.log('object');
//         break;

//     default:
//         console.log('object');
// }

const numOfDay = new Date().getDay()
switch (numOfDay) {
    case 1:
        console.log('Today is Monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log("Today is Thrusday");
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:
        console.log('Today is Saturday');
        break;
    case 7:
        console.log('Today is Sunday');
        break;
    default:
        console.log('Kuch nai ha');
}




//Loops in JS

for (let start = 1; start <= 10; start++) {
    // console.log(`5 * ${start} = ${start * 5}`);
    // console.log('5 *', start, "=", start * 5);
    // console.log('----');
}
// while(condition){}
let start = 1
while (start <= 10) {
    console.log(`10 * ${start} = ${start * 10}`);
    // console.log('While Loop hu');
    start++
}
console.log(start, 'Start Value');
//do-while
do {
    // console.log(`I am CALLED : ${start}`);
    start++
    // console.log('start', start);
} while (start == 10)
console.log('object');


// For-of loop (Array, string)  Values
let studentArray = ["Hamza", "Asim", "Ali", "Samina", "Yasmeen"]
for (let stud of studentArray) {
    // console.log(`The name of Student is ${stud}`)
}

const myNamee = "Ameer Hamza"
for (const xname of myNamee) {
    // console.log(xname);
}

// For in-loop ===keys
const teacher = {
    name: "Ameer",
    email: "ameer@yopmail.co",
    contact: 9876543,
}

for (let key in teacher) {
    // console.log(teacher[key]);
}

// 
for (let i = 0; i <= studentArray.length - 1; i++) {
    // console.log('object', studentArray[i]);
}

console.log('Function Start');
// Functions in JS
function addPrices() {
    const a = 10
    const b = 20
    console.log(a + b);
}

function multiplyVal() {
    const ab = 200;
    const cd = 300;
    let total = ab * cd
    let sum = ab + cd;
    // console.log(total);
    // return ab*cd;
    return { total };
}
const funcVar = multiplyVal()

if (funcVar.total) {
    console.log('Status Multi True');
}
if (funcVar.sum) {
    console.log('Sum  hai');
} else {
    console.log('sum nai ha');
}
multiplyVal()
console.log('Function End');


// Function parameters
function totalMarks(name, obtMarks, grade = "A") {
    console.log(`${name} your obtained marks is: ${obtMarks} and your grade is: ${grade}`);
}

totalMarks("Meer", 70)
totalMarks("Maham", 90, "B")
totalMarks("Latif", 50)


// Funtion
let funcExp = function () {
    console.log('Function Expression syntax');
}

// Arrow Funtion

// let funcAnnony = () => {
//     console.log('Arrow Function');
// }

// Arrow function

let additionValues = (val1, val2) => {
    let sum = val1 + val2
    return sum
}
console.log(additionValues(20, 40));

// DOM Manipulation  (Document object model)
let myNameBea = "Ameer Hamza"
const targetElement = document.getElementById("myName")
// console.log(targetElement, 'Target Object');

targetElement.innerHTML = myNameBea;

// Events in JS
const clickyId = document.getElementById("clickingId")
console.log(clickyId);
function handleClickEvent() {

}
clickyId.addEventListener("click", () => {
    alert("Hey, I'm clicked")
    console.log('Ye click hogya hai');
})


// String Methods
let strVar = 'DevCastle'
const myStrName = "Ameer Hamza"
strVar[2]
const resultStr = strVar.includes("z")
const replacedStr = strVar.replaceAll("e", "xzy")
console.log(replacedStr);

const startStr = strVar.endsWith("l")
console.log(startStr, 'Start With');


const splitStr = strVar.split(" ")
console.log(splitStr, 'Split');

const slicesStr = strVar.slice(-2)
const subStringsStr = strVar.substring(-2)

console.log(slicesStr, 'Slice');
console.log(subStringsStr, 'SubString');

// const concatedStr = strVar.concat(" ",myStrName)
const concatedStr = strVar + " " + myStrName
console.log(concatedStr);

const charAtStr = strVar.charAt(4)
console.log(charAtStr, 'CharAt');

// subString
// slice
// LoweCase
// UpperCase
// Includes
//Replcace
// Length
// ReplaceAll
// startWith
// endsWith
// Split
// Slice
// subString
//concat
// CharAt