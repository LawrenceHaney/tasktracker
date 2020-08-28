import Task from "../Models/Task.js";
import STORE from "../store.js";



//Public
class TasksService {
  newSubTask(rawsubtask, id) {
    let activeTask = STORE.State.tasks.find(t => t.id == id)
    activeTask.subtask.push(rawsubtask)
  }
  newTask(rawTask) {
    let task = new Task(rawTask)
    STORE.State.tasks.push(task)
  }

}

const SERVICE = new TasksService();
export default SERVICE;
