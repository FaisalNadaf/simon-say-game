let gameseq=[];
let userseq=[];
let btn=["red","yellow","green","blue"];
let h2=document.querySelector("h2");
let started=false;
let level=0;

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game is stated");
        started=true;
        leveup();
    }
})

function btnflash(){
  btn.classList.add("flash");
  setTimeout (function() {
    btn.classList.remove("flash");
  },250)
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout (function() {
      btn.classList.remove("userflash");
    },250)
  }

function leveup(){
    userseq=[];
    level++;
    h2.innerHTML=(`level ${level}`);

    //random btn

let randomidx=Math.floor(Math.random()*3);
let randomcolor=btn[randomidx];
let randombtn=document.querySelector(`.${randomcolor}`);
console.log(randombtn);
console.log(randomcolor);
console.log(randomidx);
gameseq.push(randomcolor);
console.log(gameseq);
    btnflash(randombtn);

}

function check(idx){

    if(gameseq[idx]==userseq[idx]){
        if(gameseq==userseq)
        { 
            setTimeout(leveup(),1000);
        }
    }
    else{
        h2.innerHTML=`game over press any key to play`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor="white";
        },150)
        reset();
    }
}

function btnpress(){
    let btn=this;
    userflash(btn);
    console.log(this);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    check(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}