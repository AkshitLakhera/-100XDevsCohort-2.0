// Async code
// 


// function kiratsAsyncFunction() {
//   let p = new Promise(function(resolve) {
//     // do some async logic here
//     resolve("hi there!")
//   });
//   return p;
// }

// function main() {
//   kiratsAsyncFunction().then(function(value) {
//       console.log(value);
//   });
// }
// console.log("Hello mere bhai ")
// main();
// console.log("before promise")
// function kiratAsyncFunction(){
//   let p = new Promise (function (resolve){
//     resolve("hi there ! whats up");
//   })
//   return p 
// }
// async function main (){
//   const value =  await kiratAsyncFunction();
//   console.log(value)
//   console.log("hello putter")
// }
// console.log("after async")
// main();


// Promises
// Until now, we’ve only used other people’s asynchronous functions
// How can we create an asynchronous function of our own?
// Ugly way
// It is just a wrapper on top of another async function,
// which is fine.
// Usually all async functions you will write will be on top of
// JS provided async functions like setTimeout or fs.readF
// *******
// -When thread become idle then  only it will run call back
// Eg-When she came back with ketchup dhe waited for 2mins for chopping vegetable as he is not idle

// JS architecture
// When code starts executing it first go to call stack and execute  line by line if in between async function came then it get in web api section and start's it's processing there,and in btween our code after the function work sequecially as working earlier.When  async function in web api complete it's processing it go to stack que and when earlier function get idle then it run the call back.

// Async Await
// It is just  a new syntactic sugar  ,still uses callback and promises under the hood make code much more readiable then callback and promises
// It usuall used on caller side not on the side where you define am async function 

// Promise practice with chatgpt


// let p = new Promise(function(resolve,reject){
//     setTimeout(() => {
//         resolve("hello there")
//     }, 1000);
// });

// Async function
function mySettimeout(fn,delay){
    setTimeout(function(){
        console.log("Thank you harkirat bhaiya for teaching me this topic so clearly")
    },9000)
}
const timeout = mySettimeout();
console.log(timeout)