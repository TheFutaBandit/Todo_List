import { childProjectObject } from "./childProjectModule";

export const projectLoader = (() => {
    let parentProjectArray = [];

    const loadStorageAtBootup = (() => {
        if(localStorage.length === 0) return;
        let projectStorage = JSON.parse(localStorage.getItem('projects'));
        parentProjectArray = projectStorage.map((projectItem) => {
            const projectObject = childProjectObject();
            const projectNeeded = projectItem.project;
            projectObject.project = projectNeeded;
            return projectObject;
        }) 
        return parentProjectArray;
    });

    function localStorageSave() {
        localStorage.setItem('projects', JSON.stringify(parentProjectArray));
    }

    

    function parentProjectSize() {
        return parentProjectArray.length;
    }

    const addProject = () => {
        parentProjectArray.push(childProjectObject());
        localStorageSave();
    }

    const addTaskToProject = (projectIndex, name, description, date, priority) => {
        parentProjectArray[projectIndex].addTaskObject(name,description, date, priority);
        if(projectIndex != 0) parentProjectArray[0].addTaskObject(name,description, date, priority);
        localStorageSave();
    }

    function printProject(projectIndex) {
        parentProjectArray[projectIndex].displayTasks();
    }

    function deleteProject(projectIndex) {
        if(projectIndex === 0) return;
        parentProjectArray.splice(projectIndex,1);
        localStorageSave();
    }

    function getProjectSize(index) {
        return parentProjectArray[index].getProjectSize();
    }

    function deleteProjectTask(index,taskIndex) {
        parentProjectArray[index].deleteTask(taskIndex);
        localStorageSave();
    }

    function toggleStatusTask(index,taskIndex) {
        // console.log(taskIndex);
        parentProjectArray[index].toggleStatus(taskIndex);
        localStorageSave();
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
        toggleStatusTask,
        loadStorageAtBootup
    }
})();