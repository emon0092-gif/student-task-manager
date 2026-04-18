let tasks = [];

function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") return;

    tasks.push({ text: taskText, completed: false });
    input.value = "";
    renderTasks();
}

function renderTasks(filter = "all") {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        if (filter === "completed" && !task.completed) return;
        if (filter === "pending" && task.completed) return;

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.innerText = task.text;
        span.onclick = () => toggleTask(index);

        if (task.completed) {
            span.classList.add("completed");
        }

        const delBtn = document.createElement("button");
        delBtn.innerText = "X";
        delBtn.className = "delete-btn";
        delBtn.onclick = () => deleteTask(index);

        li.appendChild(span);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

function filterTasks(type) {
    renderTasks(type);
}

// Initial render
renderTasks();
