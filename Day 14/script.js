//Creates an array containing 7 food  items
const  shoppingItems = ["Cold Drinks", "Bread", "Tea", "Eggs", "Rice", "Sugar", "Milk"];

// reference to  html element with ID "shoppingList".
let list = document.getElementById("shoppingList");

//Starts a loop that will run once for each item in the array
for (let i = 0; i < shoppingItems.length; i++) {
    let li = document.createElement("li");
    li.innerText = shoppingItems[i];
    list.appendChild(li);
}
