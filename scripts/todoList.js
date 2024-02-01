

const todoes = []; // This array stores your todo items.

export function getAllTodoes() {
    return todoes;
}

let todoId = 0;
export function addTodo(data) {
    const newTodo = {
        id: todoId++,
        title: data.title,
        isComplete: false,
        createdAt: new Date(),
        updatedAt: new Date(),
    };
    todoes.push(newTodo);
}



// /**
//  * Returns all the Todoes in a list
//  *
//  * @returns {Todo}
//  */
// export function getAllTodoes() {
//     return todoes;
// }

// /**
//  * Creates a new Todo based on the passed
//  * in data
//  *
//  * @param {TodoCreationInfo} data
//  * @returns {Todo}
//  */
// export function addTodo(data) {
//     const newTodo = {
//         id: 0,
//         title: data.title,
//         isComplete: false,
//         createdAt: new Date(),
//         updatedAt: new Date(),
//     }
//     todoes.push(newTodo)
// }