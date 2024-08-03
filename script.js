document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('add-task');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');
    const taskCount = document.getElementById('task-count');

    addTaskButton.addEventListener('click', addTask);

    newTaskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const taskText = newTaskInput.value.trim();
        if (taskText === "") {
            newTaskInput.value = "";
            return;
        }
         
        if (taskText.length > 100) {
            alert("Task content cannot exceed 100 characters");
            newTaskInput.value = "";
            return;
        }

        const listItem = document.createElement("li");
        
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", toogleTask);

        const taskLabel = document.createElement("span");
        taskLabel.textContent = taskText;

        const deleteIcon = document.createElement("span");
        deleteIcon.innerHTML = "&#10006;"; // X symbol
        deleteIcon.classList.add("delete-icon");
        deleteIcon.addEventListener("click", deleteTask);

        listItem.appendChild(checkbox);
        listItem.appendChild(taskLabel);
        listItem.appendChild(deleteIcon);

        taskList.appendChild(listItem);

        newTaskInput.value = "";

        updateTaskCount();
    }

    function toogleTask(event) {
        const listItem = event.target.parentNode;
        if(event.target.checked) {
            listItem.classList.add("completed");
        } else {
            listItem.classList.remove("completed");
        }
    }

    function deleteTask (event) {
        const listItem = event.target.parentNode;
        taskList.removeChild(listItem);
        updateTaskCount();
    }

    function updateTaskCount() {
        const totalTasks = taskList.getElementsByTagName("li").length;
        taskCount.textContent = `${totalTasks} tasks left`;
    }

});

