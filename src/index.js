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
        mainProject.parentProjectArray.forEach((item) => {
            screen.projectCardRender(`Project ${mainProject.parentProjectSize()}`, mainProject.parentProjectSize());
        })
    })();

    function projectAdditionLogic(){
        screen.projectCardRender(`Project ${mainProject.parentProjectSize()}`, mainProject.parentProjectSize());
        mainProject.addProject();    
    }

    const defaultProjectAddition = (() => {
        projectAdditionLogic();
    })();

    // function debug(){
    //     console.log("HI");
    // }

    const addProjectButton = (() => {
        const addButton = document.querySelector(".project-add");
        addButton.addEventListener("click", projectAdditionLogic)
    })();

    const configureAndButton = (projectIndex = 0) => {
        const addButton = document.querySelector(".add-task");
        addButton.addEventListener("click", () => {
            console.log("hi");
            screen.taskCardRender("gym hey", "Due Date: Tomorrow");
            mainProject.addTaskToProject(projectIndex,"gym hey", "gym hey", "56", "hello");
        })
    };

    configureAndButton();


    // const displayProjectTasksRender = (() => {
    //     const project_list = document.querySelector(".project-list")

    //     project_list.addEventListener("click", (event) => {
    //         let projectIndexEvent = event.target.dataset.id;   
    //         if(projectIndexEvent === undefined) projectIndexEvent = 1;
    //         configureAndButton(projectIndexEvent);
    //         // console.log("hi")
    //         mainProject.parentProjectArray[projectIndexEvent-1].project.forEach((event) => {  
    //             console.log(event);
    //         });            
    //     })

    // })();


    // const addTaskToProjectButton = (() => {
    //     const addButton = document.querySelector(".add-task");
    //     addButton.addEventListener("click", () => {
    //         mainProject.addTaskToProject(0,"gym hey", "gym hey", "56", "hello");
    //         displayProjectTasksRender();
    //     })
        
    // })();



    
})();










