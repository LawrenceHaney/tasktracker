import Task from "../Models/Task.js";
import STORE from "../store.js";



//Public
class TasksService {
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
