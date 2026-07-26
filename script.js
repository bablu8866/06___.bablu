emailjs.init("WHdzkp11IHgLIfcue");

document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
        "service_tmksidb",
        "template_1bhemff",
        this
    ).then(function () {
        document.getElementById("result").innerHTML = "✅ Message sent successfully!";
    }, function (error) {
        document.getElementById("result").innerHTML = "❌ Failed to send message!";
        console.log(error);
    });

    this.reset();
});

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
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
