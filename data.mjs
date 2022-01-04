export function setLS(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
}

export function getLS() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

export function printList(todoList) {
  todoList.innerHTML = "";
  let lista = document.createElement("ul");
  lista.className = "todos list-group mb-5";
  lista.id = "todoList";

  let todos = getLS();

  for (let i = 0; i < todos.length; i++) {
    let item = document.createElement("li");
    item.className = "list-group-item";
    item.id = i;
    let pText = document.createElement("p");
    pText.innerText = todos[i].text;

    let delBtn = document.createElement("button");
    delBtn.className = "ms-2 btn btn-sm btn-outline-dark";
    delBtn.id = i;
    delBtn.innerText = "🗑️";
    item.append(pText, delBtn);
    lista.append(item);

    if (todos[i].completed) {
      item.classList.add("completed");
    }

    delBtn.addEventListener("click", (e) => {
      todos.splice(i, 1);
      setLS(todos);
      printList(todoList);
    });

    pText.addEventListener("click", (e) => {
      todos[i].completed = !todos[i].completed;
      setLS(todos);
      printList(todoList);
    });
  }
  todoList.append(lista);
}
