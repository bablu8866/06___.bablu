function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("message").value;
    var result = document.getElementById("result");
    
    if (name === "" || email === "" || msg === "") {
        result.innerHTML = "❌ सभी fields भरें / Fill all fields";
        result.style.color = "red";
    } else if (!email.includes("@")) {
        result.innerHTML = "❌ Valid email दर्ज करें";
        result.style.color = "red";
    } else {
        result.innerHTML = "✅ Form submitted successfully!";
        result.style.color = "green";
    }
}
// ===== Portfolio Features =====

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Scroll Animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const top = section.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});
// Typing Effect

const text = [
  "Frontend Web Developer",
  "HTML | CSS | JavaScript",
  "Web Designer"
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

  document.querySelector(".hero-text h3").textContent = letter;

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
// Dark / Light Mode

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML = "☀️ Light";
    } else {
        themeBtn.innerHTML = "🌙 Dark";
    }
});
