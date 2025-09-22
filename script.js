const inputBox = document.querySelector(".input-box");
const taskList = document.querySelector(".Task-list");
const addBtn = document.querySelector(".add-btn");

addBtn.onclick = function () {
  addTask();
};

function addTask() {
  if (inputBox.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    li.classList.add("circle");
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.classList.add("cross");
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

taskList.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked-circle");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// Save Data Function
function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}
function showTask() {
  taskList.innerHTML = localStorage.getItem("data");
}
showTask();

// Prevent to Open the Inspect

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault(); // Prevents right-click menu
//   alert("Right-click is disabled on this page!");
// });

document.addEventListener("keydown", function (e) {
  if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
    e.preventDefault();
    alert("Dev tools are disabled!");
  }
});
