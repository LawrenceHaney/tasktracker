import Task from "../Models/Task.js";
import STORE from "../store.js";



//Public
class TasksService {
  removeDubTask(id, subtaskvalue) {
    let activetask= STORE.State.tasks.find(t => t.id == id)
    let index = activetask.dubtask.findIndex(i => i == subtaskvalue)
    activetask.dubtask.splice(index, 1)
  }
  moveToDone(id, task) {
    let activetask= STORE.State.tasks.find(t => t.id == id)
      let index = activetask.subtask.findIndex(i => i == task)
      activetask.dubtask.push(
        activetask.subtask.splice(index, 1)
      )
  }

  moveToList(id, task) {
    let activetask= STORE.State.tasks.find(t => t.id == id)
      let index = activetask.dubtask.findIndex(i => i == task)
      activetask.subtask.push(
        activetask.dubtask.splice(index, 1)
      )
  }
  
  removeTask(id) {
    let index = STORE.State.tasks.findIndex(t => t.id == id)
    if(index == -1){
      console.error("invalid")
    }
    STORE.State.tasks.splice(index, 1)
  }
  newTask(rawTask) {
    let task = new Task(rawTask)
    STORE.State.tasks.push(task)
  }
  newSubTask(rawsubtask, id) {
    let activeTask = STORE.State.tasks.find(t => t.id == id)
    activeTask.subtask.push(rawsubtask)
    }

    removeSubTask(id, subtaskvalue){
      let activetask= STORE.State.tasks.find(t => t.id == id)
      let index = activetask.subtask.findIndex(i => i == subtaskvalue)
      activetask.subtask.splice(index, 1)
      }
}

const SERVICE = new TasksService();
export default SERVICE;
