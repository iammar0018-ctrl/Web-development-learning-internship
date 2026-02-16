const list = document.getElementById("taskList");

function addTask() {
    let input = document.getElementById("taskInput");
    if (input.value === "") return;

   
    list.innerHTML += `<li>${input.value} <button onclick="this.parentElement.remove(); save()">Delete</button></li>`;
    
    input.value = "";
    save();
}

function save() {
    let tasks = [];
    document.querySelectorAll("li").forEach(li => {
      
        tasks.push(li.innerText.replace("Delete", "").trim());
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.onload = () => {
    let data = JSON.parse(localStorage.getItem("tasks")) || [];
    data.forEach(t => {
        list.innerHTML += `<li>${t} <button onclick="this.parentElement.remove(); save()">Delete</button></li>`;
    });
};