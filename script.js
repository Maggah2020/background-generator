var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");  // notice the dot - as it's class
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient()
{
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";  // display new colors
    css.textContent = body.style.background + ";";  // shows the changed color input in text form
}

// callback functions for setGradient
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
