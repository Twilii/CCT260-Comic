
let bushesCleared = 0;
const totalBushes = 4;

function clearGreenery(bushElement) {

    // Hide the clicked bush if it hasn't been hidden yet
    if (bushElement.style.visibility !== "hidden") {
        bushElement.style.visibility = "hidden";
        bushesCleared++;
    }

    // When all bushes are cleared
    if (bushesCleared >= 4) {
        document.getElementById("theWay").style.display = "flex"
        document.getElementById("storyText").innerText =
            "A fork is revealed. One path emenates a mysterious sound. Another leads to a hollow tree. The third rings with the Korok's laughter. Choose your way...";
    }
}