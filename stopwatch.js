let sec = 0;
let min = 0;
let hr = 0;
const buttons = document.getElementsByClassName("button");
let stopTimer = true;

buttons.forEach(function (btn) {
    btn.addEventListener("click", function (c) {
        console.log(c.currentTarget.classList)
    
    const start = Date.now(),
    stop = Date.now(),
    diff = stop-start;

})})
