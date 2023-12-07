// Calculate the time it takes between setTimeout call and inner function actual running
const startTime  = new Date() ;
setTimeout(function(){
    const endTime = new Date ();
    const runningTime = endTime.getTime()-startTime.getTime();
    console.log(runningTime)
    console.log("Hello ! ,How are you ?")
},4000)
// My learning
// In real-world scenarios, it's common to see slight variations in the actual execution time due to the non-blocking and asynchronous nature of JavaScript. If exact timing is critical, more sophisticated timing mechanisms may be needed, such as using the Web Performance API or other high-resolution timers available in certain environments.

