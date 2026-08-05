// ===== Golden Adventure =====

const petals = document.querySelector(".petals");
const button = document.getElementById("startBtn");
const dog = document.querySelector(".dog-wrapper");

// ----------------------------
// Create Falling Petals
// ----------------------------

for(let i=0;i<30;i++){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.style.left=Math.random()*100+"vw";

    petal.style.animationDuration=
    (6+Math.random()*8)+"s";

    petal.style.animationDelay=
    Math.random()*5+"s";

    petal.style.opacity=
    .4+Math.random()*.6;

    petal.style.transform=
    `scale(${0.5+Math.random()})`;

    petals.appendChild(petal);

}


// ----------------------------
// Dog Bounce
// ----------------------------

dog.addEventListener("click",()=>{

dog.animate([

{transform:"translateY(0px) scale(1)"},

{transform:"translateY(-25px) scale(1.06)"},

{transform:"translateY(0px) scale(1)"}

],{

duration:500

});

spawnHearts();

});


// ----------------------------
// Hearts
// ----------------------------

function spawnHearts(){

for(let i=0;i<10;i++){

const h=document.createElement("div");

h.innerHTML="💖";

h.className="heart";

h.style.position="absolute";

h.style.left=
(window.innerWidth/2-40+Math.random()*80)+"px";

h.style.top=
(window.innerHeight/2-120+Math.random()*60)+"px";

h.style.fontSize=
(18+Math.random()*16)+"px";

document.body.appendChild(h);

h.animate([

{
transform:"translateY(0px)",
opacity:1
},

{
transform:"translateY(-180px)",
opacity:0
}

],{

duration:2200,

easing:"ease-out"

});

setTimeout(()=>{

h.remove();

},2200);

}

}


// ----------------------------
// Button
// ----------------------------

button.addEventListener("click",()=>{

button.innerHTML="YAY!! 🐶";

button.style.background="#82d173";

button.style.transform="scale(1.08)";

spawnHearts();

setTimeout(()=>{

document.querySelector("h1").innerHTML=
"Level 1 Ready 🎾";

document.querySelector("p").innerHTML=
"Buddy wants to play fetch!";

button.innerHTML="Start Game ➜";

button.style.background="#ff8fb8";

},1700);

});


// ----------------------------
// Random Ear Wiggle
// ----------------------------

setInterval(()=>{

dog.animate([

{transform:"rotate(0deg)"},

{transform:"rotate(-2deg)"},

{transform:"rotate(2deg)"},

{transform:"rotate(0deg)"}

],{

duration:700

});

},6000);
