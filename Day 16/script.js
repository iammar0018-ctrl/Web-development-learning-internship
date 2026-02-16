function changeContent() {
    // select by id
    let heading = document.getElementById("heading");
    heading.innerText = "Hello GoodMorning!";
    heading.style.color = "blue";

    // select by querySelector
    let paragraph = document.querySelector(".text");
    paragraph.innerText = "This text changed using DOM.";
    paragraph.style.fontSize = "18px";
}
