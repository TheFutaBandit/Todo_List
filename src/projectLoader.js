import { childProjectObject } from "./childProjectModule";

export const projectLoader = (() => {
    let parentProjectArray = [];

    const addProject = () => {
        parentProjectArray.push(childProjectObject());
    }

    const addTaskToProject = (projectIndex, name, description, date, priority) => {
        parentProjectArray[projectIndex].addTaskObject(name,description, date, priority);
        if(projectIndex != 0) parentProjectArray[0].addTaskObject(name,description, date, priority);
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

    function getProjectSize(index) {
        return parentProjectArray[index].getProjectSize;
    }

    function deleteProjectTask(index,taskIndex) {
        parentProjectArray[index].deleteTask(taskIndex);
    }

    // const defaultAction = (() => {
    //     parentProjectArray.push(childProjectObject());
    // })();


    return {
        parentProjectArray,
        addProject,
        addTaskToProject,
        printProject,
        deleteProject,
        parentProjectSize,
        getProjectSize,
        deleteProjectTask,
    }
})();