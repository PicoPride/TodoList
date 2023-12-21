const input = document.getElementById("input-box");
const list = document.getElementById("list-container");
const date = document.getElementById("date-picker");
const priority = document.getElementById("drop-down");

function addList() {
  if (input.value === "") {
    alert("You Must Write Something !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;

    let datePara = document.createElement("h6");
    datePara.innerHTML = date.value;
    li.appendChild(datePara);
    

    let priorityPara = document.createElement("p");
    priorityPara.innerHTML = priority.value;
    li.appendChild(priorityPara);
    priorityPara.classList.add(priority.value);
    console.log(priority.value);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    list.appendChild(li);
    saveData();
  }
  input.value = "";
}

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showList() {
  list.innerHTML = localStorage.getItem("data");
}
showList();

