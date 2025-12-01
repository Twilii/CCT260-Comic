// Hide text2 and Continue2 when page loads
document.getElementById("text2").style.display = "none";
document.getElementById("continue2").style.display = "none";

// When Continue1 is clicked -> show text2, hide text1, swap buttons
document.getElementById("continue1").onclick = function () {
    document.getElementById("text1").style.display = "none";
    document.getElementById("continue1").style.display = "none";

    document.getElementById("text2").style.display = "block";
    document.getElementById("continue2").style.display = "inline-block";
};

const metFairy = localStorage.getItem("hasMetFairy");

if (metFairy === "true") {
    document.getElementById("link").href = "../13_hearts/index.html"
} else {
    document.getElementById("link").href = "../12_hearts/index.html"
}