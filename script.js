/* =====================================
   LUXURY PORTFOLIO
   PART 3A
===================================== */

// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// Smooth Scroll

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

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>80){

header.style.boxShadow="0 0 25px rgba(212,175,55,.35)";

}else{

header.style.boxShadow="none";

}

});
/* =====================================
   PART 3B
===================================== */

// Typing Effect

const text = [
    "Full Stack Developer",
    "Frontend Developer",
    "JavaScript Developer",
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

    const h2 = document.querySelector(".left h2");

    if (h2) {
        h2.textContent = letter;
    }

    if (letter.length === currentText.length) {

        setTimeout(() => {

            index = 0;
            count++;

            type();

        }, 1500);

    } else {

        setTimeout(type, 100);

    }

})();


// Fade Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";
    section.style.transform = "translateY(80px)";
    section.style.transition = "1s";

    observer.observe(section);

});


// Image Hover Cursor

document.querySelectorAll(".gallery-grid img").forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});
/* =====================================
   PART 3C - FINAL
===================================== */

// Gallery Lightbox

const galleryImages = document.querySelectorAll(".gallery-grid img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");
        overlay.className = "lightbox";

        overlay.innerHTML = `
            <span class="close">&times;</span>
            <img src="${img.src}">
        `;

        document.body.appendChild(overlay);

        overlay.querySelector(".close").onclick = () => {
            overlay.remove();
        };

        overlay.onclick = (e) => {
            if (e.target === overlay) {
                overlay.remove();
            }
        };

    });

});

// Page Loader

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// Current Year

const year = new Date().getFullYear();

const copyright = document.querySelector(".copyright");

if (copyright) {
    copyright.innerHTML = `© ${year} BABLU KUMAR | All Rights Reserved`;
}
// ===== Typing Animation =====

const words = [
"Frontend Developer",
"JavaScript Developer",
"Full Stack Developer",
"Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typing = document.querySelector(".typing");

function type(){

if(!typing) return;

const currentWord = words[wordIndex];

if(isDeleting){

typing.textContent = currentWord.substring(0,charIndex--);

}else{

typing.textContent = currentWord.substring(0,charIndex++);

}

let speed = isDeleting ? 60 : 120;

if(!isDeleting && charIndex === currentWord.length + 1){

isDeleting = true;
speed = 1500;

}

if(isDeleting && charIndex === 0){

isDeleting = false;
wordIndex = (wordIndex + 1) % words.length;

}

setTimeout(type,speed);

}

type();

