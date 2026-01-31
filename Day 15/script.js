const display = document.getElementById("display");

//Add numbers or operators to the display
function appendToDisplay(input) {
    display.value += input;
}

// When press clear the entire display
function clearDisplay() {
    display.value = "";
}

//Delete just the last character (Backspace key)
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

//Perform the calculation
function calculate() {
    try {
        //The eval func takes an expression and evalute it and give us result. 
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";//This will show the text "Error" on display for uncomplete equation e.g 2+....
    }
}