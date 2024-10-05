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

    const addProjectButton = (() => {
        const addButton = document.querySelector(".project-add");
        addButton.addEventListener("click", () => {
            mainProject.addProject();
            screen.projectCardRender(`Project ${mainProject.parentProjectSize()}`);
        })
    })();

    screen.projectCardRender(`Project ${mainProject.parentProjectSize()}`);

    for(let i = 0; i<3; i++) {screen.taskCardRender();}
})();










