
function changeWithOnclick() {
    let text = document.getElementById("text");
    text.innerText = "Changed using onclick!";
    text.style.color = "blue";
}

let btn = document.getElementById("eventBtn");

btn.addEventListener("click", function() {
    let text = document.getElementById("text");
    text.innerText = "The text has been changed by addEventListener!";
    text.style.color = "purple";
});

