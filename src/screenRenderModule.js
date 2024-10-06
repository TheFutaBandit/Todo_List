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

    const expandModalRender = (taskName = "Lorem ipsum dolor sit, amet conse adipisicing elit!", 
        taskDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sed asperiores nulla molestias vitae! Odio, recusandae. Excepturi reprehenderit veniam neque dolorem inventore! Numquam vel sint consequuntur, id ut eos dicta?",
        taskDate = "13/04/2003",
        taskPriority = "High",
        taskStatus = "0") => {

        const body = document.querySelector("body");
        const expand_task = document.createElement("dialog");
        expand_task.setAttribute("id", "expandTask");



        const task_header = document.createElement("div");
        task_header.classList.add("task_header");
        expand_task.appendChild(task_header);

        const task_name = document.createElement("div");
        task_name.classList.add("task_name");
        task_name.textContent = taskName;
        task_header.appendChild(task_name);

        const task_status = document.createElement("task_status");
        task_status.classList.add("task_status");
        const input_status = document.createElement("input");
        input_status.setAttribute("id", "input_status");
        input_status.setAttribute("type", "checkbox");
        task_status.appendChild(input_status);
        task_header.appendChild(task_status);



        const task_body = document.createElement("div");
        task_body.classList.add("task_body");
        task_body.textContent = taskDescription;
        expand_task.appendChild(task_body);



        const task_footer = document.createElement("div");
        task_footer.classList.add("task_footer");
        expand_task.appendChild(task_footer);
        
        const task_date = document.createElement("div");
        task_date.classList.add("task_date");
        task_date.textContent = taskDate;
        task_footer.appendChild(task_date);

        const task_priority = document.createElement("div");
        task_priority.classList.add("task_priority");
        task_priority.textContent = taskPriority;
        task_footer.appendChild(task_priority);



        const task_close = document.createElement("button");
        task_close.classList.add("task_close");
        task_close.textContent = "close";
        expand_task.appendChild(task_close);

        body.appendChild(expand_task);

        task_close.addEventListener("click", () => {
            expand_task.close();
        })


    }

    

    return {
        projectCardRender,
        taskCardRender,
        clearProjectTasks,
        expandModalRender,
        // addTaskModal
    }
})();