// reveal story2 and button2
document.getElementById("button1").addEventListener("click", () => {
    document.getElementById("story2").style.display = "block";
    document.getElementById("buttonGroup2").style.display = "block";

    // hide previous button and story
    document.getElementById("buttonGroup1").style.display = "none";
    document.getElementById("story1").style.display = "none";
});

// reveal story3 and choice buttons
document.getElementById("button2").addEventListener("click", () => {
    document.getElementById("story3").style.display = "block";
    document.getElementById("buttonGroup3").style.display = "block";

    // Hide previous button and story
    document.getElementById("buttonGroup2").style.display = "none";
    document.getElementById("story2").style.display = "none";
});