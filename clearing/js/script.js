// reveal story2 and choice buttons
document.getElementById("button1").addEventListener("click", () => {
    document.getElementById("story2").style.display = "block";
    document.getElementById("buttonGroup2").style.display = "block";

    // Hide previous button and story
    document.getElementById("buttonGroup1").style.display = "none";
    document.getElementById("story1").style.display = "none";
});