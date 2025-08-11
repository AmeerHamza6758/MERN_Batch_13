
//Spread / rest Oper   ...

const arr1 = [10, 230, 34, 55]

const arr2 = [34, 23, 23]

const combinedArry = [...arr1, ...arr2, "Hamza"]
// console.log(combinedArry, 'Combined');

const obj1 = {
    name: 'Hamza',
    contact: 99874834838
}
const obj2 = {
    lName: 'Ali',
    alterNum: 987654,
}

// console.log({ ...obj2 });
const newObj = { ...obj1, ...obj2 }
// console.log(newObj, 'New Spread Obj');


function sumOfNums(...arg) {
    const [a, b, c, d, ...xyz] = arg
    console.log(a, b, c, d, 'rest-Start', xyz, 'Function params');

    // const sumOf = a.reduce((accumu, currentItem) => accumu + currentItem, 0)
    // console.log(sumOf, 'reduced');
}

const nums = [10, 230, 40, 23, 5, 323, 23, 13, 55]
sumOfNums(10, 230, 40, 23, 5, 323, 23, 13, 55)

console.log(hostVar, 'hoisting variable');
var hostVar;


hostFunc()

function hostFunc() {
    console.log('Host called');
}


// Callbacks
function callGoodStudent(studName, callback) {
    callback(studName)
}

function goodStudent(stud) {
    console.log(`${stud} : is a very good student`);
}


// Call main/parent fucntion
callGoodStudent('Hamza', goodStudent)
callGoodStudent('Ayesha', goodStudent)
callGoodStudent('Aslam', goodStudent)



function mainStep(name, callback) {
    const user = { name, email: `${name}@yopmail.com` }
    return callback(user)
}

function printName(name, callback) {
    console.log('Name is', name);
    return callback(true)
}
function sendMail(user, callback) {
    console.log(user.email, "Email is sent")
    return callback(user.name)
}

function sendNotification(status) {
    if (status == true) {
        console.log('Notifiation is sent');
    }
}
console.log('Callback chaining start');
mainStep("Hamza", (user) => {
    sendMail(user, (name) => {
        printName(name, (status) => {
            sendNotification(status)
        })
    })
})


console.log('Call back hell');