'use strict'
var taskArray;
console.log(taskArray)
function TaskCnst( tasks , date , urgency ) {
    this.tasks = tasks
    this.date = date
    this.urgency = urgency
    taskArray = this
    }
    

    if (localStorage.getItem("setTask") !== null) {
        var parsedtask = JSON.parse(localStorage.getItem('setTask'));
    }
       
var formTag = document.getElementById('formTag')
formTag.addEventListener('submit', submitionFunc );

function submitionFunc() {
    event.preventDefault();


    var tasks = event.target.task.value;
        var date = event.target.date.value;
        var urgency = event.target.urgency.value;

         
        var tasking = { "tasks": tasks , "date":date , "urgency":urgency };
        // taskArray.push(tasking)
    //  console.log(taskArray)
        var storedTasks = JSON.stringify(taskArray);
        console.log(tasking)
        // making a new key to save the data 
        localStorage.setItem('setTask', storedTasks);
        var newTask = new TaskCnst ( tasks , date , urgency)

    TableRenderFunc()
}



function TableRenderFunc(){
var table = document.getElementById('tableId')
// var tr = document.createElement('tr')
// var td1 = document.createElement('td')
// var td2 = document.createElement('td')
// var td3 = document.createElement('td')
// var td4 = document.createElement('td')


// tr.appendChild(td2)
// tr.appendChild(td3)
// tr.appendChild(td4)

// table.appendChild(tr)
// for (let index = 0; index < taskArray.length; index++) {
    var tr = document.createElement('tr')
    table.appendChild(tr)

    var td1 = document.createElement('td')
    td1.textContent = taskArray.tasks
    tr.appendChild(td1)
    var td2 = document.createElement('td')
    tr.appendChild(td2)
    td2.textContent = taskArray.date
    var td3 = document.createElement('td')
    tr.appendChild(td3)
    td3.textContent = taskArray.urgency


// }



}
