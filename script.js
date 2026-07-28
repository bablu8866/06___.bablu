const contactForm = document.querySelector(".contact-form form");

if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();

        alert("✅ Message Sent Successfully!");

        contactForm.reset();
    });
}// ==========================
// MOBILE MENU
// ==========================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");
    });
}

// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

        navbar.classList.remove("show");

    });

});

// ==========================
// NAVBAR SHADOW
// ==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){
header.style.boxShadow="0 0 25px rgba(212,175,55,.35)";
}else{
header.style.boxShadow="none";
}

});

// ==========================
// TYPING EFFECT
// ==========================

const words=[
"Frontend Developer",
"JavaScript Developer",
"Full Stack Developer",
"Web Designer"
];

let wordIndex=0;
let charIndex=0;
let isDeleting=false;

const typing=document.querySelector(".typing");

function typeEffect(){

if(!typing) return;

const currentWord=words[wordIndex];

if(isDeleting){
typing.textContent=currentWord.substring(0,charIndex--);
}else{
typing.textContent=currentWord.substring(0,charIndex++);
}

let speed=isDeleting?60:120;

if(!isDeleting && charIndex===currentWord.length+1){
isDeleting=true;
speed=1500;
}

if(isDeleting && charIndex===0){
isDeleting=false;
wordIndex=(wordIndex+1)%words.length;
}

setTimeout(typeEffect,speed);

}

typeEffect();

// ==========================
// SCROLL ANIMATION
// ==========================

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";
}

});

});

document.querySelectorAll("section").forEach(section=>{

section.style.opacity="0";
section.style.transform="translateY(80px)";
section.style.transition="1s";

observer.observe(section);

});

// ==========================
// PAGE LOADER
// ==========================

window.addEventListener("load",()=>{
document.body.style.opacity="1";
});

// ==========================
// COPYRIGHT YEAR
// ==========================

const year=new Date().getFullYear();

const copyright=document.querySelector(".copyright");

if(copyright){
copyright.innerHTML=`© ${year} BABLU KUMAR | All Rights Reserved`;
}
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked by browser");
    });
});

musicBtn.onclick = () => {
    if (music.paused) {
        music.play();
        musicBtn.innerHTML = "🔊 Music";
    } else {
        music.pause();
        musicBtn.innerHTML = "🔇 Music";
    }
};
const canvas = document.getElementById("rain");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const drops = [];

for(let i=0;i<300;i++){
    drops.push({
        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,
        l:Math.random()*20+10,
        s:Math.random()*8+6
    });
}

function rain(){
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.strokeStyle="rgba(174,194,224,0.5)";
    ctx.lineWidth=1;

    for(let d of drops){
        ctx.beginPath();
        ctx.moveTo(d.x,d.y);
        ctx.lineTo(d.x,d.y+d.l);
        ctx.stroke();

        d.y+=d.s;

        if(d.y>canvas.height){
            d.y=-20;
            d.x=Math.random()*canvas.width;
        }
    }

    requestAnimationFrame(rain);
}

rain();

window.onresize=()=>{
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
};
