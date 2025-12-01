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

localStorage.setItem("hasMetFairy", "true");