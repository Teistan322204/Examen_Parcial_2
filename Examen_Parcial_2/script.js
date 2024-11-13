let taskToDelete = null;

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const prioritySelect = document.getElementById("prioritySelect");
    const taskList = document.getElementById("taskList");

    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText === "") {
        alert("Por favor, ingresa una tarea.");
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item", priority);
    taskItem.innerHTML = `
        ${taskText}
        <button onclick="promptDeleteTask(this, '${priority}')">Eliminar</button>
    `;

    taskList.appendChild(taskItem);

    taskInput.value = "";
    prioritySelect.value = "baja";
}

function promptDeleteTask(button, priority) {
    if (priority === "alta") {
        // Mostrar el modal
        taskToDelete = button;
        document.getElementById("modal").style.display = "flex";
    } else {
        deleteTask(button);
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
}

// Configuración de los botones del modal
document.getElementById("confirmDeleteBtn").addEventListener("click", () => {
    if (taskToDelete) {
        deleteTask(taskToDelete);
        taskToDelete = null;
    }
    document.getElementById("modal").style.display = "none";
});

document.getElementById("cancelDeleteBtn").addEventListener("click", () => {
    taskToDelete = null;
    document.getElementById("modal").style.display = "none";
});