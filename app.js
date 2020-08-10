'use strict'
var formTagId = document.getElementById('formTag')
formTagId.addEventListener('submit', SubmitionFunc );
var taskArray = [];
function SubmitionFunc() {
    event.preventDefault();

    TaskCnst.setTask();
    TableRenderFunc()


    // var tasks = event.target.task.value;
    // var date = event.target.date.value;
    // var urgency = event.target.urgency.value;
     
    // var tasking = { "tasks": tasks , "date":date , "urgency":urgency};
    // taskArray.push(tasking)
 
    // var storedTasks = JSON.stringify(taskArray);
    // console.log(taskArray)
    // // making a new key to save the data 
    // localStorage.setItem('setTask', storedTasks);
    // document.location.href = 'CountDown.html';


}
var parsedtask = JSON.parse(localStorage.getItem('setTask'));


function TableRenderFunc(){
var table = document.getElementById('tableId')
var tr = document.createElement('tr')
var td1 = document.createElement('td')
var td2 = document.createElement('td')
var td3 = document.createElement('td')
var td4 = document.createElement('td')

tr.appendChild(td1)
tr.appendChild(td2)
tr.appendChild(td3)
tr.appendChild(td4)

table.appendChild(tr)
td1.textContent = TaskCnst.tasks
td2.textContent = TaskCnst.date
td3.textContent = TaskCnst.urgency
td4.textContent = TaskCnst.done

}

function TaskCnst( tasks , date , urgency) {
this.tasks
this.date
this.urgency
taskArray.push(this)
}
TaskCnst.prototype.setTask = function (){
    this.tasks = event.target.task.value;
    this.date = event.target.date.value;
    this.urgency = event.target.urgency.value;
     
    var tasking = { "tasks": tasks , "date":date , "urgency":urgency};
    taskArray.push(tasking)
 
    var storedTasks = JSON.stringify(taskArray);
    console.log(tasking)
    // making a new key to save the data 
    localStorage.setItem('setTask', storedTasks);

}

var tasks = new TaskCnst("tasks");
var date = new TaskCnst("date");
var urgency = new TaskCnst("urgency");
TaskCnst.setTask()



