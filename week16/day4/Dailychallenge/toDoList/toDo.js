const tasks = [];

const taskForm = document.getElementById('myTaskForm');
const taskInput = document.getElementById('taskInput');
const listTasksDiv = document.querySelector('.listTasks');


function addTask(event){
    event.preventDefault()
    const taskText = taskInput.value.trim();
    if (!taskText) {
        alert('Please enter a task!');
        return;
    }

    tasks.push(taskText);

    const taskDiv = document.createElement('div');
    taskDiv.classList.add('task');

    const comleteCheck = document.createElement('input');
    comleteCheck.type = 'checkbox';
    comleteCheck.id = `task-${tasks.length}`;

    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', comleteCheck.id);
    taskLabel.textContent = taskText;

    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fas fa-times"></i>';


    removeBtn.addEventListener('click', () => {
    listTasksDiv.removeChild(taskDiv);
    });
    
    taskDiv.appendChild(removeBtn);
    taskDiv.appendChild(comleteCheck);
    taskDiv.appendChild(taskLabel);

    listTasksDiv.appendChild(taskDiv);

    taskInput.value = '';
}
    taskForm.addEventListener('submit', addTask);

