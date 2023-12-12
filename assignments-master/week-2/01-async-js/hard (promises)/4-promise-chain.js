/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function waitOneSecond() {
    return new Promise((resolve,reject) => {
    setTimeout(function(){
    resolve("first fucntion is resolved")
    },1000)
    })
    }

    function waitTwoSecond() {
    return new Promise ((resolve,reject) => {
      setTimeout(function(){
        resolve("Second function is resolved")
      },2000)
    })
    }

    function waitThreeSecond() {
    return new Promise ((resolve,reject)=> {
      setTimeout(function() {
        resolve("Third function is resolved")
      },3000)
    })
    }
    async function calculateTime() {
    const startTime = new Date().getTime();
   const result= await waitOneSecond();
   const result2= await waitTwoSecond();
   const result3= await waitThreeSecond();
      const endTime = new Date().getTime();
      const totalTime = endTime-startTime;
      console.log(`Total time taken to run all functions -${totalTime}`)
      console.log(result)
      console.log(result2)
      console.log(result3)
}
calculateTime();
