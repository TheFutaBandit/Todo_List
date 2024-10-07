import "./styles.css"
import {addDays, format} from "date-fns"
import { projectLoader } from "./projectLoader";
import { screenLoader } from "./screenRenderModule";

{/* <div class = "task">
        <div class = "priority"></div>
        <div class = "task-content">
            <div class = "task-text">
                <div class = "name"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit!</p></div>
                <div class = "date"><p>Due-Date: 13/23/2024</p></div>
            </div>
            <div class = "task-options">
                <button class = "trash">-</button>
                <button class = "check">?</button>
            </div>
        </div>
    </div> */}

const webpageLoader = (() => {
    // const mainProject = projectLoader;
    // mainProject.addProject();
    // mainProject.addTaskToProject(1,"gym pushup", "gym pushup", "56", "hello");
    // mainProject.printProject(1);
    // mainProject.parentProjectArray[1].setPriority(0,"high")
    // mainProject.parentProjectArray[1].toggleStatus(0);
    // mainProject.printProject(1);

    const screen = screenLoader;
    const mainProject = projectLoader;



    const defaultProjectsRender = (() => {
        if(localStorage.length != 0) {
            mainProject.parentProjectArray = mainProject.loadStorageAtBootup();
        }
        else {
            mainProject.addProject();
        }
        mainProject.parentProjectArray.forEach((item, index) => {
            screen.projectCardRender(`Project ${index}`, index);
        })
    })();


    function projectAdditionLogic(){
        screen.projectCardRender(`Project ${mainProject.parentProjectSize()}`, mainProject.parentProjectSize());
        mainProject.addProject();  
    }

    

    

    

    // function debug(){
    //     console.log("HI");
    // }

    const addProjectButton = (() => {
        const addButton = document.querySelector(".project-add");
        addButton.addEventListener("click", projectAdditionLogic)
    })();

    const removeTaskCallBack = (projectIndex, projectTask) => {
        console.log(projectTask)
        mainProject.deleteProjectTask(projectIndex, projectTask);
        if(mainProject.getProjectSize(projectIndex) === 0) {
            mainProject.deleteProject(projectIndex);
        }
        screenLoader.clearProject();
        mainProject.parentProjectArray.forEach((item, index) => {
            screen.projectCardRender(`Project ${index}`, index);
        })
    }

    const toggleCallback = (projectIndex, projectTask) => {
        mainProject.toggleStatusTask(projectIndex, projectTask);
        
    }

    

    const configureAndButton = ((index) => {
        const addButton = document.querySelector(".add-task");
        const modal = document.querySelector("#add-task-modal");

        let projectIndex = 0;

        // const expandTask = (taskName, taskDescription, taskDate, taskPriority) => {
        //     screen.expandModalRender(taskName, taskDescription, taskDate, taskPriority);
        //     const dialogExpand = document.querySelector("#expandTask");
        //     dialogExpand.showModal();
        // };

        

        function displayTaskFromModal(taskName = "Let It Rip", taskDescription = "loremIpsumBruh", taskDate = "10/10/24", taskPriority = "High") {
            screen.taskCardRender(taskName, taskDate, taskDescription, taskPriority, mainProject.getProjectSize(projectIndex), projectIndex, removeTaskCallBack, toggleCallback);
            mainProject.addTaskToProject(projectIndex,taskName, taskDescription, taskDate, taskPriority);
        }

        function addTask() {
            // console.log(`I belong to : ${projectIndex}`);
            // if(projectIndex === "undefined") console.log("wtf");
            
            modal.showModal();
        }

        const taskSubmissionForm = (() => {
            const task_form = document.querySelector(".task_form");
            task_form.addEventListener("submit", (event) => {
                event.preventDefault();
                const form_data = new FormData(task_form);
                const task_data = Object.fromEntries(form_data);
                // console.log(task_data);

                displayTaskFromModal(task_data["task-name"],task_data["task-description"],task_data["task-date"],task_data["task-priority"]);

                modal.close();
            })
        })();

        function changeTaskButtonIndex(index) {
            console.log(`I have been changed to ${index}`)
            projectIndex = index;
        }

        function addTaskButtonEvent() {
            addButton.addEventListener("click", addTask)
        }

        function removeTaskButtonEvent() {
            addButton.removeEventListener("click", addTask)
        }

        return {
            addTaskButtonEvent,
            removeTaskButtonEvent,
            changeTaskButtonIndex
        }
    })();

    

    const defaultConfigureButton = (() => {
        configureAndButton.addTaskButtonEvent();
    })();


    const projectTasksRender = (projectIndex) => {
        mainProject.parentProjectArray[projectIndex].project.forEach((event) => {
            screen.taskCardRender(event.name, event.date, event.description, event.priority, mainProject.getProjectSize(projectIndex), projectIndex, removeTaskCallBack, toggleCallback);
        })
    }

    


    const switchProjects = (() => {
        const project_list = document.querySelector(".project-list")

        project_list.addEventListener("click", (event) => {
            let projectIndexEvent = event.target.dataset.id;   
            if(projectIndexEvent === undefined) projectIndexEvent = 0;
            console.log(`${projectIndexEvent}`);
            configureAndButton.changeTaskButtonIndex(projectIndexEvent);
            screen.clearProjectTasks();
            projectTasksRender(projectIndexEvent);          
        })
    })();


    // const addTaskToProjectButton = (() => {
    //     const addButton = document.querySelector(".add-task");
    //     addButton.addEventListener("click", () => {
    //         mainProject.addTaskToProject(0,"gym hey", "gym hey", "56", "hello");
    //         displayProjectTasksRender();
    //     })
        
    // })();

    
})();










