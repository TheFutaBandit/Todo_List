import "./styles.css"
import {addDays, format} from "date-fns"
import { projectLoader } from "./projectLoader";


const webpageLoader = (() => {
    const mainProject = projectLoader;
    mainProject.addProject();
    mainProject.addTaskToProject(1,"gym pushup", "gym pushup", "56", "hello");
    mainProject.printProject(1);
    mainProject.parentProjectArray[1].setPriority(0,"high")
    mainProject.parentProjectArray[1].toggleStatus(0);
    mainProject.printProject(1);
});

webpageLoader();



