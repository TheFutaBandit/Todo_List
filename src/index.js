import "./styles.css"

console.log("wtf")

import {addDays, format} from "date-fns"
const date = new Date()
const dateFormattedd = format(date, "MM/dd/yyyy")
console.log(dateFormattedd);

const addButton = document.querySelector(".add-task");
const modal = document.querySelector(".modal");

addButton.addEventListener("click", () => {
    modal.showModal();
})

