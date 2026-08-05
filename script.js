const button = document.getElementById("startBtn");

button.addEventListener("click", () => {

    button.innerHTML = "YAY!! 🐶";

    button.style.background = "#8BC34A";

    setTimeout(() => {

        alert("Level 1 coming next! 🎾");

    },600);

});
