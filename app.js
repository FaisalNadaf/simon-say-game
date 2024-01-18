let gameseq = [];
let userseq = [];
let btnColors = ["red", "yellow", "green", "blue"];
let h2 = document.querySelector("h2");
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game is started");
        started = true;
        levelup();
    }
});

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h2.innerHTML = `level ${level}`;

    // Random btn
    let ridx = Math.floor(Math.random() * 4); // Use 4 instead of 3 to include all colors
    let rcolor = btnColors[ridx];
    let rbtn = document.querySelector(`.${rcolor}`);
    gameseq.push(rcolor);
    console.log(gameseq);
    btnflash(rbtn);
}

function check(idx) {
    if (gameseq[idx] == userseq[idx]) {
        if(gameseq.length==userseq.length){
            levelup();
        }
    } else {
        h2.innerHTML = "game over, press any key to play";
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnpress() {
    let btn = this;
    userflash(btn);
    console.log(this);
    usercolor=btn.getAttribute(`id`);
    userseq.push(usercolor);

    check(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns) {
    btn.addEventListener("click", btnpress);
}

function reset() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
