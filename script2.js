let addbtn = document.querySelector("#add");

const handleClick = () => {
  let task = document.querySelector('input[name="task"]').value;
  let newObj = { task: task, done: false };
  localStorage.setItem(task, JSON.stringify(newObj));
  updateList();
};

const updateList = () => {
  let items = document.querySelector(".items");
  items.innerHTML = "";

  for (i = 0; i < localStorage.length; i++) {
    let x = localStorage.getItem(localStorage.key(i));
    let parsed = JSON.parse(x);
    let divItem = document.createElement("div");
    divItem.classList.add("item");
    divItem.innerHTML += `${parsed.task} <button onClick="deleteItem(${i})">&check;</button><button onClick="edit(${i})">edit</button>`;

    if (parsed.done) {
      divItem.style.textDecoration = "line-through";
      divItem.innerHTML = `${parsed.task} `;
    }
    items.appendChild(divItem);
  }
};
updateList();

const deleteItem = (i) => {
  let x = localStorage.getItem(localStorage.key(i));
  let parsed = JSON.parse(x);

  let newObj = { task: parsed.task, done: true };

  localStorage.setItem(parsed.task, JSON.stringify(newObj));
  updateList();
};

const edit = (i) => {
  let x = localStorage.getItem(localStorage.key(i));
  let parsed = JSON.parse(x);
  let editBtns = document.querySelectorAll(".item");
  editBtns[
    i
  ].innerHTML = `<input type="text" name="edit" value="${parsed.task}"> <button onClick="deleteItem(${i})">&check;</button><button onClick="confirmEdit(${i})">confirm </button>`;
};

const confirmEdit = (i) => {
  let x = localStorage.getItem(localStorage.key(i));
  let parsed = JSON.parse(x);
  let input = document.querySelector('input[name="edit"]').value;

  let newObj = { task: input, done: false };
  localStorage.setItem(parsed.task, JSON.stringify(newObj));

  updateList();
};

addbtn.addEventListener("click", handleClick);
