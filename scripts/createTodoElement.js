

const template = `
<div class="todo-item">
  <p>Feed sharks</p>
  <p>created at : <span class="created-at"></span></p>
</div>
`

/**
 * Takes a Todo Item and generates a HTML Element for that Todo
 * You are free to make wathever HTLM you feel necessary,
 * But it should be semantically meaningful and
 * look decent
 *
 * @param {Todo} data
 * @returns {HTMLElement}
 */
export function createTodoElement(data) {

    const wrapper = document.createElement("li");
    wrapper.innerHTML = template;

    const titleElement = wrapper.querySelector(".title")
    titleElement.textContent =data.title;

    const createAtElement = wrapper.(".created-at");
    createAtElement = textContent = data.created-at.

    
    return wrapper;
}