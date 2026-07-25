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
        result.innerHTML = "✔ फ़ॉर्म सफलतापूर्वक जमा हो गया। धन्यवाद।";
        result.style.color = "green";
    }
}
