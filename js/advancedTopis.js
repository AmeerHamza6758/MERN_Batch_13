'use strict';
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
function callGoodStudent(studName, callback, callback2) {
    // hhudhcchcj
    console.log(studName, 'Parent called');
    callback(studName, callback2)
    console.log('Parent end');
}

function goodStudent(stud, callback2) {
    console.log(`${stud} : is a very good student`);
    callback2(stud, 'callback in goodstudent')
}

function badStudent(stud) {
    console.log(stud, 'Bad student');
}


// Call main/parent fucntion
callGoodStudent('Hamza', goodStudent, badStudent)
// callGoodStudent('Tyabba', badStudent)
// callGoodStudent('Aslam', goodStudent)



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


setTimeout(() => {
    console.log('Hey hey, I\'m called');
}, 5000);

// let count = 1
// function printName() {
//     console.log('Ameer Hamza', count);
//     count = count + 1
// }
// setInterval(printName, 1000)

console.log('Call back hell');
console.log('Call back hell');


// Promises

function proFunc(stud) {
    return new Promise((resolve, reject) => {

        if (stud) {
            resolve(`Student name received ${stud}`)
        }
        else {
            reject("promise Rejected")
        }
    })
}


// const proVar = proFunc().then((res) => { console.log(res, 'Promise resolved'); })
//     .catch((err) => { console.log(err, 'Promise rejected'); }).finally(() => console.log('Finall chal gya'))

// console.log(proVar);



function steps1(stud) {
    console.log('step-1');
    return Promise.resolve(stud)
}

function steps2(name) {
    console.log('step-2');
    if (name) {
        return Promise.resolve(true)
    }
}

function steps3(stauts) {
    console.log('step-3-Notification sent');
    return Promise.resolve(true)

}

function steps4() {
    console.log('step-4');
    return Promise.resolve()
}


// steps1().then(() => {
//     steps2().then(() => {
//         steps3().then(() => {
//             steps4().then(() => { console.log('All steps called'); })
//         })
//     })
// })



// async/await

async function asFunc() {
    try {
        console.log('Async function call');
        const myName = "Ameer Hamza"
        const name = await steps1(myName)
        const stauts = await steps2(name)
        const notiSend = await steps3(stauts)
        await steps4()

    } catch (error) {
        console.log(error, 'Error');
    }
}

function syncFunc() {
    console.log('Sync function called');
    return 'Ameer Hamza'
}

// const resolvedFunc = asFunc()
// const resolvedSyncFunc = syncFunc()

// console.log(resolvedFunc, 'async');
// console.log(resolvedSyncFunc, 'sync');





async function fetchUserData(userId) {
    console.log(`Fetching data for user: ${userId}`);
    return new Promise(resolve => setTimeout(() => resolve({ id: userId, name: "John Doe" }), 1000));
}

async function processUserData(user) {
    console.log(`Processing data for user: ${user.name}`);
    return new Promise(resolve => setTimeout(() => resolve({ ...user, processed: true }), 800));
}

async function saveUserData(processedUser) {
    console.log(`Saving data for user: ${processedUser.name}`);
    return new Promise(resolve => setTimeout(() => resolve({ ...processedUser, saved: true }), 500));
}

async function handleUserWorkflow(userId) {
    try {
        const user = await fetchUserData(userId);
        const processedUser = await processUserData(user);
        const savedUser = await saveUserData(processedUser);
        console.log("User workflow completed:", savedUser);
    } catch (error) {
        console.error("Error in user workflow:", error);
    }
}

// handleUserWorkflow(123);




async function getUserPosts() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data);

    const postId = document.getElementById("post")
    data.map((item, index) => {
        let pId = document.createElement("h1")
        console.log(item.title, 'title');
        pId.textContent = `${item.title}`
        postId.appendChild(pId)
    })
}

getUserPosts()