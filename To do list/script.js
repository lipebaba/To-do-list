function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskItem = document.createElement("li");
        taskItem.className = "task";
        taskItem.innerHTML = `
            ${taskText}
            <button onclick="deleteTask(this)">Remover</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}
