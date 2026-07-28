// ===============================
// Premium Portfolio Script
// ===============================

// Page Fade In
window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Typing Effect
const text = [
    "Frontend Developer",
    "JavaScript Developer",
    "Responsive Web Designer",
    "React Learner"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {

    if (count === text.length) {
        count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const typing = document.getElementById("typing");

    if (typing) {
        typing.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {
            index = 0;
            count++;
        }, 1800);

    }

    setTimeout(type, 120);

})();

// Scroll Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

cards.forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".8s";

    observer.observe(card);

});

// Smooth Button Effect
document.querySelectorAll("button").forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });

});

// Console Message 😎
console.log("🔥 Bablu Kumar Premium Portfolio Loaded Successfully");
// =====================================
// PART 8 - FINAL PREMIUM EFFECTS
// =====================================

// Loading Screen
window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

loader.style.opacity = "0";

setTimeout(()=>{

loader.style.display="none";

},800);

}

});

// Mouse Glow Effect

const glow = document.createElement("div");

glow.style.width="20px";
glow.style.height="20px";
glow.style.borderRadius="50%";
glow.style.position="fixed";
glow.style.pointerEvents="none";
glow.style.background="rgba(255,215,0,.6)";
glow.style.boxShadow="0 0 35px gold";
glow.style.zIndex="99999";
glow.style.transition="transform .05s linear";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX-10+"px";
glow.style.top=e.clientY-10+"px";

});

// Scroll Progress Bar

const progress=document.createElement("div");

progress.style.position="fixed";
progress.style.top="0";
progress.style.left="0";
progress.style.height="5px";
progress.style.width="0%";
progress.style.background="#FFD700";
progress.style.zIndex="999999";
progress.style.boxShadow="0 0 15px gold";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const totalHeight=document.body.scrollHeight-window.innerHeight;

const progressHeight=(window.pageYOffset/totalHeight)*100;

progress.style.width=progressHeight+"%";

});

// Welcome Message

setTimeout(()=>{

console.log("✨ Welcome to Bablu Kumar Premium Portfolio ✨");

},1000);
/* ===================================
   PART 8 - FINAL PREMIUM JAVASCRIPT
=================================== */

// ===== Typing Animation =====
const texts = [
  "Frontend Developer",
  "JavaScript Developer",
  "Responsive Web Designer",
  "React Learner"
];

let textIndex = 0;
let charIndex = 0;
let typingElement = document.getElementById("typing");

function typeEffect() {
  if (!typingElement) return;

  if (charIndex < texts[textIndex].length) {
    typingElement.innerHTML += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 80);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.innerHTML = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 40);
  } else {
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();

// ===== Scroll Reveal =====
const cards = document.querySelectorAll(".card,.project-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = ".8s";
  observer.observe(card);
});

// ===== Mouse Glow =====
const glow = document.createElement("div");

glow.style.width = "20px";
glow.style.height = "20px";
glow.style.borderRadius = "50%";
glow.style.position = "fixed";
glow.style.background = "rgba(255,215,0,.5)";
glow.style.boxShadow = "0 0 30px gold";
glow.style.pointerEvents = "none";
glow.style.zIndex = "9999";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX - 10 + "px";
  glow.style.top = e.clientY - 10 + "px";
});

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

// ===== Console =====
console.log("🔥 Bablu Kumar Premium Portfolio Loaded Successfully");
