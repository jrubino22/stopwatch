let sec = 0;
let min = 0;
let hr = 0;

let time = 10000000;


const buttons = document.querySelectorAll(".button");
let stopTimer = true;

function timeToString () {
    let diffInHrs = time / 3600000;
let hh = Math.floor(diffInHrs);

let diffInMins = (diffInHrs - hh) * 60;
let mm = Math.floor(diffInMins);

let diffInSecs = (diffInMins - mm) * 60;
let ss = Math.floor(diffInSecs)

let formattedHH = hh.toString().padStart(2, "0");
let formattedMM = mm.toString().padStart(2, "0");
let formattedSS = ss.toString().padStart(2, "0");

return `${formattedHH}:${formattedMM}:${formattedSS}`;
}



buttons.forEach(function (btn) {
    btn.addEventListener("click", function (c) {
        const classes = c.currentTarget.classList;
       
    })

})
