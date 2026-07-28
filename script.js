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
