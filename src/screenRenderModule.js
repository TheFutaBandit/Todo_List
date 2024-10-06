export const screenLoader = (() => {

    // const addTaskModal = (() => {
    //     const addTaskModal = document.querySelector("#add-task-modal");
    //     const addTaskButton = document.querySelector(".add-task");
    
    //     addTaskButton.addEventListener("click", () => {
    //         addTaskModal.showModal();
    //     })
    // })();

    const projectCardRender = (name, projectIndex = 0, className = "project-card", classType = "div") => {
        const projectList = document.querySelector(".project-list");
        const projectCard = document.createElement(classType);
        projectCard.classList.add(className);
        projectCard.textContent = name;
        projectCard.setAttribute("data-id", projectIndex)
        // projectCard.addEventListener("click", (item) => {
        //     console.log(projectIndex);
        // })
        projectList.appendChild(projectCard);
    };

    function childrenAppendTasks(parentNode, taskName = "Lorem ipsum dolor sit, amet consectetur adipisicing elit!", taskDate = "Due-Date: 13/23/2024") {
        const priority = document.createElement("div");
        priority.classList.add("priority");
        const task_content = document.createElement("div");
        task_content.classList.add("task-content");

        const task_text = document.createElement("div");
        task_text.classList.add("task-text");
        const name = document.createElement("div");
        const name_p = document.createElement("p");
        name_p.textContent = taskName;
        const date = document.createElement("div");
        const date_p = document.createElement("p");
        date_p.textContent = taskDate;
        name.appendChild(name_p);
        date.appendChild(date_p);
        task_text.appendChild(name);
        task_text.appendChild(date);
        task_content.appendChild(task_text);

        const task_options = document.createElement("div");
        task_options.classList.add("task-options");
        const trashButton = document.createElement("button");
        trashButton.classList.add("trash");
        trashButton.textContent = "-";
        task_options.appendChild(trashButton);
        const checkButton = document.createElement("button");
        checkButton.classList.add("check");
        checkButton.textContent = "?";
        task_options.appendChild(checkButton);
        task_content.appendChild(task_options);

        parentNode.appendChild(priority);
        parentNode.appendChild(task_content);
    }

    const taskCardRender = (taskName, taskDate) => {
        const taskContainer = document.querySelector(".task-container");
        const taskCard = document.createElement("div");
        taskCard.classList.add("task");
        childrenAppendTasks(taskCard,taskName,taskDate);
        taskContainer.appendChild(taskCard);
    }

    const clearProjectTasks = () => {
        const taskContainer = document.querySelector(".task-container");
        taskContainer.innerHTML = "";
    }

    const projectAddRender = () => {
        projectCardRender("+","project-add","button");
    };

    

    return {
        projectCardRender,
        taskCardRender,
        clearProjectTasks,
        // addTaskModal
    }
})();