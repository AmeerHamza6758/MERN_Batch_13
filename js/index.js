// Variables scope
// Global --function scope // block-level

// var 
// let
// const

var myName = new String("Xyz")
myName = 2345678
console.log(myName)

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
console.log(typeof (name), 'Ye mera name ha');
// Number
const myContact = 8375899383
console.log(myContact, typeof (myContact));

// Boolean
const isPass = false
console.log(isPass, typeof (isPass));

// undefined
let isBucket = undefined;
console.log(isBucket, typeof (isBucket));

// Null
let isPrice = null
console.log(isPrice, typeof (isPrice));

// Symbol
const isSymb = Symbol("abcd")
console.log(isSymb, typeof (isSymb));

// Non-primitive

const students = ["Bisman SB", "Ameer Hamza", "Mushaib", "Shafia",]
console.log(students[3], typeof (students));


// Object
const employee = {
    // Key:value,
    id:1,
    name: "Ameer Hamza",
    contact: 29837465637829,
    isValid: true
}

console.log(employee.name);