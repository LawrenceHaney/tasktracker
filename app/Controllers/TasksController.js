import TasksService from "../Services/TasksService.js";
import STORE from "../store.js";

function _drawTask(){
  STORE.saveData()
  let tasks = STORE.State.tasks
  let template = ''
  tasks.forEach(t => template += t.Template)
  document.getElementById("task-container").innerHTML = template
}
//Public
export default class TasksController {
  constructor() {
    _drawTask()
  }
  newTask(){
    event.preventDefault()
    let form = event.target
    let rawTask = {
      title: form.title.value
    }
    TasksService.newTask(rawTask)
    _drawTask()
  }
  newSubTask(event, id){
    event.preventDefault()
    let form = event.target
    let rawsubtask = form.subtask.value 
    TasksService.newSubTask(rawsubtask, id)
    _drawTask()
  }
}