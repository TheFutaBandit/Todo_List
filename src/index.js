import "./styles.css"

console.log("wtf")

import {addDays, format} from "date-fns"
const date = new Date()
const dateFormattedd = format(date, "MM/dd/yyyy")
console.log(dateFormattedd);

const addButton = document.querySelector(".add-task");
const expandButton = document.querySelector(".check")
const modal = document.querySelector(".modal");
// const taskExpand = document.querySelector("#task-dialog")
const closeExpand = document.querySelector(".close-expand")


addButton.addEventListener("click", () => {
    modal.showModal();
})


const taskDialog = document.getElementById('task-dialog');
  
  // Function to open the modal
  function openTaskModal() {
      taskDialog.showModal();
  }

  // Function to close the modal
  function closeTaskModal() {
      taskDialog.close();
  }

  // Add event listener to the task button to open the modal
  document.querySelector('.check').addEventListener('click', openTaskModal);

  // Add event listener to the close button inside the modal
  document.querySelector('.close-expand').addEventListener('click', closeTaskModal);

