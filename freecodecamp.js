
/*
lap1 = 34;
let lap2 = 33;
let lap3= 36;


function logLapTime(){
    let totalTime = lap1 + lap2 + lap3 
    console.log(totalTime)
}
logLapTime()
console.log(totalTime)


let lapsCompleted = 0
function incrementlap(){
    lapsCompleted = lapsCompleted + 1
}
incrementlap()
incrementlap()

console.log(lapsCompleted)
*/


// Building a passenger counter app?
let countEl = document.getElementById("count-el")
 let count = 0
 function increment(){
    count = count + 1
    countEl.innerText = count
 }