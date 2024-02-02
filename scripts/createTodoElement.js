
/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */

// import { updateDisplay } from "./main.js"; //prøvde og lage checkbox class active virke

const template = `
<div class="todo-item">
  <input type="checkbox" class="complete-checkbox">
  <p class="title"></p>
  <p>created at : <span class="created-at-value"></span></p>
</div>
`;


export function createTodoElement(data) {
    const wrapper = document.createElement("li");
    wrapper.innerHTML = template;

    const titleElement = wrapper.querySelector(".title");
    titleElement.textContent = data.title;

    const createAtElement = wrapper.querySelector(".created-at-value");
    createAtElement.textContent = data.createdAt;

    const checkbox = wrapper.querySelector(".complete-checkbox");

    checkbox.addEventListener("change", () => {
        // Handle checkbox state change (completed or not completed)
        data.isComplete = checkbox.checked;
        updateDisplay(); // Update the display after changing the task state
    });

    return wrapper;
}