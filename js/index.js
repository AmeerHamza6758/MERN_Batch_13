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
const myStrName = "Ameer Hamza";
const studentName = String("Arslan")
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
// replcace
// Length
// ReplaceAll
// startWith
// endsWith
// concat
// CharAt



// Number Methods /Math methods
const basketPrice = 140;
const basketPricee2 = "20.90456"
const basketPricee1 = Number(200)
const output = basketPrice - "100"
console.log(typeof Number(basketPrice), output, 'Number');
const isCheck = isNaN(basketPrice)
console.log(isCheck);

// cl
const sum = +10 + basketPricee2
console.log(sum);

// parseInt 
// Parse float

const num = "20.007080884884939388758939200292944888393939885"
console.log(Number(num));

// Math methods
// Max
// Min
// fixed
// round
// ceil
// floor
// random
// sqrt
// trunc

const priceOne = -10
const priceTwo = 10
const priceThree = 340.933
const pricesArray = ["100.09765"]
console.log(Math.min(Number(pricesArray)));

console.log(priceThree.toFixed(3));
// console.log(Math.sqrt(10));
console.log(Math.PI + 2);

console.log(Math.floor(Math.random() * 10) + 1000);


// Object Methods

const student = {
    name: "Payal",
    email: "payal@yahoo.co",
    mobile: +9138392902,
    age: 25,
    address: 'Jinnah Park RYK',
}

console.log(student, 'Complete Object');

Object.freeze(student)


// Delete
delete student.name
delete student.email

// Freeze

// Add name
student.firstName = "Ameer Hamza"
// Brackets
student["email"] = "ameer@yahoo.co"
student.age = 35
console.log(student, 'Modified Object');



// assgin
// freeze
// seal
// keys
// values
// entities

const Arslan = {
    fname: "Arslan",
    lname: 'Akmal',
    email: 'arslan@yahoo.com',
    age: 30
}

const mentorHamza = {
    fname: "Ameer",
    LastName: 'Hamza',
}

const checkKeys = Object.keys(Arslan)
console.log(checkKeys, 'Check Keys');

const checkValues = Object.values(Arslan)
console.log(checkValues, 'Check values');

const checkPairs = Object.entries(Arslan)
console.log(checkPairs, 'Check pairs');

const mergedObject = Object.assign(Arslan, mentorHamza)
console.log(mergedObject, 'Merged');

// console.log(student.hasOwnProperty('name'));


// Array Methods
// POP
// Push
// Shift
// Unshift
// sort
// reverse
// includes 
// length
// join
// toString
// forEach
// concat
// flat
// splice
// slice
//
const salary = [400, 2000, 200, 800, 3400]

// Add new items
// salary.sort((a, b) => b - a)

// const xyz = salary.reverse()
// const xyz = salary.includes(20000)

// const xyz= salary.join('*')
// const xyz =salary.toString()


// const xyz = salary.forEach((item) => { console.log(item, 'Ye item ha'); });

const devStudBoys = ['Saif', 'waleed', 'Izhhar', "Sarmad", 'Hammad', 'Mushaib']
const devStudGirls = ["Ayesha", "Amina", "Tyabba", "Sadaf", "Farah"]

// const xyz = devStudBoys.concat(devStudGirls)
const xyz = devStudGirls.flat()
console.log(xyz, 'New Array');

const slicedArray = devStudGirls.slice(1, 4)
console.log(slicedArray, 'Sliced Array');

// const spliceArray = devStudGirls.splice(1, 1, 'Tyabba', 'Shafia')
console.log(devStudGirls, 'spliced Array ');


//map
//filter
//reduce
//find
//findIndex
//fill
//every
//some


let studentsArray = ["Ali", "Arslan", "Ali", "Fahad", 'Hamza']

// studentsArray.fill("Hamza", 1, 3)
console.log(studentsArray, 'Student Array');

const newStudArray = studentsArray.find((item) => item === "Arslan")

// const findex = studentsArray.findIndex("Ali")
console.log(newStudArray, 'Find Method');

const newMappedArray = studentsArray.map((item, index) => { console.log(`${index} :: Hello ${item}`); })

const userInput = 'Ali'
const filteredArray = studentsArray.filter((item, index) => item === userInput)

console.log(filteredArray, 'Filtered Array');

const evenNumsArray = [20, 20, 5, 20, 20]


const reducedAray = evenNumsArray.reduce((accumu, currentItem) => accumu + currentItem)
console.log(reducedAray, 'Reduce Method');

const evenFilteredArray = evenNumsArray.filter((item, index) => {
    return (
        item % 2 == 0
    )
})

console.log(evenFilteredArray, 'Filtered Array');


const isValidAll = evenNumsArray.some((item) => item > 10)
console.log(isValidAll, 'Check');


const darray = [10, 30, 20]

const [a, b, c] = darray

const ab = darray[2]
console.log(a, b, c, ab, 'Array');

const obj = { title: 'xyz', body: 'xyz' }

const { title } = obj

console.log(title, 'abc', obj);
