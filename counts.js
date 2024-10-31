let counting = false
let count = 0
let counterInterval

const counter = document.getElementById("counter")
const start = document.getElementById("start")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")

function updateCount(){
    counter.textContent = count
}

function startCounting() {
    if (!counting) {
        counting = true;
        counterInterval = setInterval(() => {
            count++;
            updateCount();
        }, 1000); 
    }
}
start.addEventListener('click' , startCounting) 

stop.addEventListener('click' ,()=>{
    clearInterval(counterInterval)
    counting = false
})

reset.addEventListener('click' , ()=> {
    counting =false
    clearInterval(counterInterval)
    count = 0
    updateCount()
})