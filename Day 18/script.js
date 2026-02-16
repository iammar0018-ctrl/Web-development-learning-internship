
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let errorMsg = document.getElementById("errorMsg");

    if (name === "" || email === "") {
        errorMsg.textContent = "All fields are required!";
        return false; // stop form submission
    } else{
    errorMsg.textContent = "Successfully Submitted!";
    return true;
    //return false; <-- If we use  this instead of return true  this keeps the message on screen
    }
}