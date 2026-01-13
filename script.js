document.getElementById("contactBtn").onclick = function () {
    alert("I will contact you soon!");
};
document.querySelector("form").onsubmit = function (e) {
    e.preventDefault();
    alert("Message sent successfully!");
};