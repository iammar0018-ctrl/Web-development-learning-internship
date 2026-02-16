//Define the function with a parameter 'name'..
function greet(name) {
    return "Hi " + name + "! Welcome to my page.";
}
//Ask the user for their name
let userName = prompt("Enter your name:");

let greetingMessage = greet(userName);

document.getElementById("greeting").innerText = greetingMessage;
