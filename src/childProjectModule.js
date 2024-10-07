export const childProjectObject = (() => {
    let project = [];

    const taskMaker = (name,description, date, priority) => {
        let status = 0;
        return {name, description, date, priority, status};
    }

    function addTaskObject(name,description, date, priority) {
        project.push(taskMaker(name,description,date,priority));
    }

    function displayTasks() {
        project.map((item) => {console.log(item)});
    }

    function deleteTask(taskIndex) {
        console.log("do I even work");
        console.log(taskIndex);
        project.splice(taskIndex,1);
    }

    function toggleStatus(taskIndex) {
        if(project[taskIndex].status === 0) project[taskIndex].status = 1;
        else project[taskIndex].status = 0;
        console.log(`I have been toggled to ${project[taskIndex].status}`);
        // console.log(taskIndex);
    }

    function setPriority(taskIndex, value) {
        project[taskIndex].priority = value;
    }

    function getProjectSize() {
        return project.length;
    }

    return {
        project,
        addTaskObject,
        displayTasks,
        deleteTask,
        toggleStatus,
        setPriority,
        getProjectSize
    }
});   