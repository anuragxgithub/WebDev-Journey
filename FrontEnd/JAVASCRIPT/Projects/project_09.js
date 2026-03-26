const form = document.getElementById('form');
const input = document.querySelector('input');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const parent = document.createElement('div');

    const task = document.createElement('span');
    task.textContent = input.value.trim();
    task.style.marginRight = '15px';
    const doneButton = document.createElement('button');
    doneButton.textContent = "Done";
    doneButton.style.margin = "10px";
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "Delete";
    doneButton.style.margin = "10px";

    parent.append(task, doneButton, deleteButton);
    allTask.append(parent);

    doneButton.addEventListener('click', ()=>{
        task.style.textDecoration = 'line-through';
    })
    deleteButton.addEventListener('click', ()=>{
        parent.remove();
    })

})