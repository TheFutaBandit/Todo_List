export const childProjectObject = (() => {
    let project = [];

    const taskMaker = (priority, name, description, date) => {
        let status = 0;
        return {priority, name, description, date, status};
    }

    function addTaskObject(name,description, date, priority) {
        project.push(taskMaker(name,description,date,priority));
    }

    function displayTasks() {
        project.map((item) => {console.log(item)});
    }

    function deleteTask(taskIndex) {
        project.splice(taskIndex,1);
    }

    function toggleStatus(taskIndex) {
        if(project[taskIndex].status === 0) project[taskIndex].status = 1;
        else project[taskIndex].status = 1;
    }

    function setPriority(taskIndex, value) {
        project[taskIndex].priority = value;
    }

    return {
        project,
        addTaskObject,
        displayTasks,
        deleteTask,
        toggleStatus,
        setPriority
    }
});   