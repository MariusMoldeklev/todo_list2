
/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */

const template = `
<div class="todo-item">
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

    return wrapper;
}