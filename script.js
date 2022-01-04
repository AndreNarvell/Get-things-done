import { setLS, getLS, printList } from "./data.mjs";

let todoList = document.getElementById("todoListDiv");
let saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", () => {
  let todos = getLS();
  let saveItem = document.getElementById("todoInput").value;
  todos.push({ text: saveItem, completed: false });
  document.getElementById("todoInput").value = "";
  setLS(todos);
  printList(todoList);
});

printList(todoList);

// // Get the input field
// let input = document.getElementById("todoInput");

// // Execute a function when the user releases a key on the keyboard
// input.addEventListener("keyup", function (event) {
//   // Number 13 is the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });

// document
//   .getElementById("todoInput")
//   .addEventListener("keyup", function (event) {
//     event.preventDefault();
//     if (event.key === "Enter") {
//       document.getElementById("todoInput").click();
//     }
//   });
