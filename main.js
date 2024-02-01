/**
 * The file where everything comes together
 */
import * as todoList from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";

// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?


const inputText = document.querySelector("#todoTextInput");
const addButton = document.querySelector("#addButton");
const todoDisplay = document.querySelector("#todoDisplay");

function updateDisplay() {
    todoDisplay.innerHTML = "";
    const newTodo = createTodoElement();
    todoDisplay.appendChild(newTodo);
}
updateDisplay();