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

   for (const todo of todoes) {
    
    const newTodo = createTodoElement(todo);
    
    todoDisplay.appendChild(newTodo);
}
}

addButton.addEventListener("click", () =>{
    // need to read the user inputText
    const userInput  = inputText.value;
    // call our todolist.addtodo
    const newTodoData =  {
        title:inputTitle,
    };
    todoList.addTodo(newTodoData);
    // reset user input
    inputText.value = "";
})