/**
 * The file where everything comes together
 */
// import * as todoList from "./scripts/todoList.js";
// import { createTodoElement } from "./scripts/createTodoElement.js";

import { getAllTodoes } from "./scripts/todoList.js";
import { createTodoElement } from "./scripts/createTodoElement.js";
import * as todoList from "./scripts/todoList.js";


// What elements do we need?
// What events do we need to listen for?
// What should happen when those event occur?


const inputText = document.querySelector("#todoTextInput");
const addButton = document.querySelector("#addButton");
const todoDisplay = document.querySelector("#todoDisplay");

function updateDisplay() {
    todoDisplay.innerHTML = "";

    // Use the getAllTodoes function to get the todoes array
    const todoes = getAllTodoes();

    for (const todo of todoes) {
        const newTodo = createTodoElement(todo);
        todoDisplay.appendChild(newTodo);
    }
}

addButton.addEventListener("click", () => {
    const userInput = inputText.value;
    const newTodoData = {
        title: userInput,
    };
    todoList.addTodo(newTodoData);
    inputText.value = "";
    updateDisplay();
});