
// Save user name
function saveName() {
  const name = document.getElementById("nameInput").value;
  localStorage.setItem("username", name);
  document.getElementById("welcome").innerText = "Welcome " + name;
}

// Toggle theme 
function toggleTheme() {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
}

// Load saved data on page load..
window.onload = function () {
  const savedName = localStorage.getItem("username");
  const savedTheme = localStorage.getItem("theme");

  if (savedName) {
    document.getElementById("welcome").innerText = "Welcome " + savedName;
  }

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
};

