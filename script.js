const input = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

// Function to add a task
function addTask() {
    const taskValue = input.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        return;
    }

    // 1. Create the list item (li)
    const li = document.createElement('li');
    
    // 2. Add task text
    li.innerHTML = `
        <span class="task-text">${taskValue}</span>
        <button class="delete-btn">Delete</button>
    `;

    // 3. Click to toggle completion
    li.querySelector('.task-text').addEventListener('click', function() {
        this.classList.toggle('completed');
    });

    // 4. Click to delete task
    li.querySelector('.delete-btn').addEventListener('click', function() {
        li.remove();
    });

    // 5. Append to the list and clear input
    todoList.appendChild(li);
    input.value = "";
}

// Event Listeners
addBtn.addEventListener('click', addTask);

// Allow pressing "Enter" to add task
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});