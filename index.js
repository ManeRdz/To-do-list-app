import { reloj } from "./reloj.js";
import { createTask } from "./createtask.js";

const createBtn = document.getElementById("add");
const selectMenu = document.querySelectorAll("select");


reloj("clockhours", "clockminutes", "clockseconds");

createBtn.addEventListener("click", (e) => {
    e.preventDefault();  
    createTask("taskcontainer")});



    for(let i = 23;i>-1;i--){
        if(i < 10){
            i = "0" + i;
        }
        let option = `<option value="${i}">${i}</option>`;
        selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
    }
    
    for(let i = 59; i>-1; i--){
        if(i < 10){
            i = "0" + i;
        }
         let option = `<option value="${i}">${i}</option>`;
         selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
    }



    




