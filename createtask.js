
const input = document.getElementById("texto");
const selectMenu = document.querySelectorAll("select");
const stop = document.getElementById("alarmBtn");

export function createTask(taskContainer) {
        if(!input.value){
          alert("You must write a task");
          return;
        }
        const newTask = document.createElement("div");
        newTask.classList.add("task");

        const check = document.createElement("input");
        check.classList.add("check");
        check.setAttribute("type", "checkbox");
    
        const textTask = document.createElement("h3");
        textTask.classList.add("tasktext");

        const hours = document.createElement("p");
        hours.classList.add("hours");

        const dots = document.createElement("p");
        dots.classList.add("dots");

        const minutes = document.createElement("p");
        minutes.classList.add("minutes");

        const taskActions = document.createElement("div");
        taskActions.classList.add("task-actions");
    
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit");
    
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete");

        if(selectMenu[0].value == "Hours" || selectMenu[1].value == "Minutes"){
            alert("Put an hour to your new task");
            return;
        }

        hours.innerText = selectMenu[0].value;
        minutes.innerText = selectMenu[1].value;
        dots.innerHTML = ":";
        textTask.innerHTML = input.value;
        editBtn.innerHTML = "Edit";
        deleteBtn.innerHTML = "Delete";



        newTask.appendChild(check);
        newTask.appendChild(textTask);
        newTask.appendChild(hours);
        newTask.appendChild(dots);
        newTask.appendChild(minutes);
        newTask.appendChild(taskActions);
        taskActions.appendChild(editBtn);
        taskActions.appendChild(deleteBtn);
        document.getElementById(taskContainer).appendChild(newTask);
        
        input.value = "";

        editBtn.addEventListener("click", (e)=>{
            if(editBtn.innerHTML == "Edit"){
                textTask.setAttribute("contenteditable", "true");
                textTask.focus();
                editBtn.innerHTML="Save";
            }
            else if(editBtn.innerHTML == "Save"){
                textTask.setAttribute("contenteditable", "false");
                editBtn.innerHTML="Edit";
    
            }
        });

        deleteBtn.addEventListener("click", (e)=>{
            document.getElementById(taskContainer).removeChild(newTask);
        });

        check.addEventListener("click",(e)=>{
                newTask.classList.toggle("checked"); 
                taskActions.classList.toggle("checked");
                editBtn.classList.toggle("checked");
                deleteBtn.classList.toggle("checked");
                textTask.classList.toggle("checked");
        });


            let alarm = new Audio("./assets/alarm.mp3");
            
            let intervalo = setInterval(() => {
                let time = new Date(),
                actualHour = time.getHours(),
                actualMinute = time.getMinutes(),
                alarmHour = hours.innerText,
                alarmMinute = minutes.innerText;

                if(actualHour == alarmHour && actualMinute == alarmMinute){
                    alarm.play();
                    stop.classList.add("is-active");
                    check.checked = true;
                    newTask.classList.add("checked"); 
                    taskActions.classList.add("checked");
                    editBtn.classList.add("checked");
                    deleteBtn.classList.add("checked");
                    textTask.classList.add("checked");
                }
            }, 1000);
             
            stop.addEventListener("click", (e)=>{
                   alarm.pause();
                   clearInterval(intervalo);
                   stop.classList.remove("is-active");

            })

        
        
}