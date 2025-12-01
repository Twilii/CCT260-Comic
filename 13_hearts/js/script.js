const reset = document.getElementById("reset");

if (reset) {
    reset.addEventListener("click", function() {
        localStorage.clear();
        console.log("Game reset!");
        location.reload();
    });
}