/* ==========================================
   BABLU KUMAR PORTFOLIO v4.0
   PREMIUM JAVASCRIPT
========================================== */

// ===== Typing Animation =====

const words = [
  "Frontend Developer",
  "JavaScript Developer",
  "Responsive Web Designer",
  "React Learner",
  "UI Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function type() {

    if (!typing) return;

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex = (wordIndex + 1) % words.length;

        }

    }

    setTimeout(type, deleting ? 45 : 90);

}

type();


// ===== Loader =====

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 800);

    }

});


// ===== Scroll Reveal =====

const revealItems = document.querySelectorAll(".card,.project-card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},{threshold:.15});

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(50px)";

item.style.transition=".8s";

observer.observe(item);

});


// ===== Mouse Glow =====

const glow=document.createElement("div");

glow.style.width="18px";
glow.style.height="18px";
glow.style.borderRadius="50%";
glow.style.position="fixed";
glow.style.background="rgba(255,215,0,.6)";
glow.style.boxShadow="0 0 25px gold";
glow.style.pointerEvents="none";
glow.style.zIndex="99999";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-9+"px";
glow.style.top=e.clientY-9+"px";

});


// ===== Scroll Progress =====

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.left="0";
progress.style.top="0";
progress.style.height="4px";
progress.style.width="0%";
progress.style.background="#FFD700";
progress.style.zIndex="999999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=document.documentElement.scrollHeight-window.innerHeight;

const current=(window.scrollY/total)*100;

progress.style.width=current+"%";

});

console.log("🔥 Bablu Kumar Portfolio v4.0 Loaded Successfully");
