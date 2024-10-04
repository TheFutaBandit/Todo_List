import "./styles.css"
import {addDays, format} from "date-fns"
import { projectLoader } from "./projectLoader";

{/* <div class = "project-card">Project 1</div>
<div class = "project-card">Project 2</div>
<button class = "project-add">+</button> */}


const screenLoader = () => {
    const projectCardRender = (name = "hello") => {
        const projectList = document.querySelector(".project-list");
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.textContent = name;
        projectList.appendChild(projectCard);
    };

    return {
        projectCardRender
    }
}


const webpageLoader = (() => {
    // const mainProject = projectLoader;
    // mainProject.addProject();
    // mainProject.addTaskToProject(1,"gym pushup", "gym pushup", "56", "hello");
    // mainProject.printProject(1);
    // mainProject.parentProjectArray[1].setPriority(0,"high")
    // mainProject.parentProjectArray[1].toggleStatus(0);
    // mainProject.printProject(1);
    const screen = screenLoader();
    screen.projectCardRender("Project 1");
})();





