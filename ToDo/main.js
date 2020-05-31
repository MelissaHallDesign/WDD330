//create export
export class ToDo {
    constructor(content, completed ) {
        this.Id = Date.now(),
        this.Content = content,
        this.Completed = completed
    }
}

todos.forEach(
    todo => {
        //create container
        let div = document.createElement('div');

        //create checkbox
        let checkbox = document.createElement('input');
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener('click', toggleClass);

        //create span to display content
        let content = document.createElement('span');
        content.textContent = todo.content;
        //content.classList.add('cross-off');

        //create delete button
        div.appendChild(checkbox);
        div.appendChild(content);

        //append to HTML
        document.querySelector('section').appendChild(div);
    }
);

// function logToConsole() {
//     console.log(this.classList.toggle('cross-off'));
// }

//create toggle class for checking/unchecking to do items
function toggleClass() {
    this.nextSibling.classList.toggle('cross-off');
}

let todos = [];

document.querySelector('button').addEventListener('click', addToDo);

function addToDo() {
    let todo = new ToDo(
        Date.now,
        document.querySelector('input').value,
        false
    );

    todos.push(todo);

    //add to local storage
    outputList();
}

function outputList() {
    //read from local storage
    //create todo items
}