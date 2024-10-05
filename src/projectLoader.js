import { childProjectObject } from "./childProjectModule";

export const projectLoader = (() => {
    let parentProjectArray = [];

    const addProject = () => {
        parentProjectArray.push(childProjectObject());
    }

    const addTaskToProject = (projectIndex, name, description, date, priority) => {
        parentProjectArray[projectIndex].addTaskObject(name,description, date, priority);
        parentProjectArray[0].addTaskObject(name,description, date, priority);
    }

    function printProject(projectIndex) {
        parentProjectArray[projectIndex].displayTasks();
    }

    function deleteProject(projectIndex) {
        if(projectIndex === 0) return;
        parentProjectArray.splice(projectIndex,1);
    }

    function parentProjectSize() {
        return parentProjectArray.length;
    }

    const defaultAction = (() => {
        parentProjectArray.push(childProjectObject());
    })();


    return {
        addProject,
        addTaskToProject,
        printProject,
        deleteProject,
        parentProjectSize
    }
})();