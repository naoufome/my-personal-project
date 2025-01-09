// Get references to DOM elements
const push = document.getElementById('push');
const getText = document.getElementById('getText');
const tasks = document.getElementById('tasks');

// Function to load tasks from localStorage
function loadTasks() {
    let taskList;
    try {
        taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (e) {
        taskList = [];
        localStorage.setItem('tasks', JSON.stringify(taskList));
    }

    // Clear existing tasks
    tasks.innerHTML = '';

    // Populate tasks
    taskList.forEach((task, index) => {
        tasks.innerHTML += `
            <div class="task">
                <span class="taskName">${task}</span>
                <button class="delete" data-index="${index}">
                    <img src="trash.png" class="icon" alt="Delete">
                </button>
            </div>
        `;
    });

    // Add event listeners for delete buttons
    const deleteButtons = document.querySelectorAll('.delete');
    deleteButtons.forEach(button => {
        button.onclick = function () {
            const index = this.getAttribute('data-index');
            deleteTaskFromLocalStorage(index);
        };
    });

    // Add event listeners for task completion toggle
    const taskItems = document.querySelectorAll('.task');
    taskItems.forEach(task => {
        task.onclick = function (e) {
            // Prevent toggling when clicking the delete button
            if (e.target.closest('.delete')) return;
            this.classList.toggle('completed');
        };
    });
}

// Function to add a new task
push.onclick = () => {
    const taskText = getText.value.trim();
    if (taskText !== '') {
        let taskList;
        try {
            taskList = JSON.parse(localStorage.getItem('tasks')) || [];
        } catch (e) {
            taskList = [];
        }

        taskList.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(taskList)); // Corrected setItem usage
        loadTasks();
        getText.value = '';
    } else {
        alert('Please fill the empty inputs');
    }
};

// Function to delete a task from localStorage
function deleteTaskFromLocalStorage(index) {
    let taskList;
    try {
        taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (e) {
        taskList = [];
    }

    // Remove the task at the specified index
    taskList.splice(index, 1);

    // Save the updated task list to localStorage
    localStorage.setItem('tasks', JSON.stringify(taskList));

    // Reload the tasks to reflect the changes
    loadTasks();
}

// Load tasks when the window loads
window.onload = loadTasks;
