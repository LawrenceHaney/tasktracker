import {generateId} from "../utils.js"
export default class Task {
    constructor({title, color, id, subtask}) {
        this.title = title
        this.color = color
        this.id = id || generateId()
        this.subtask= subtask || []
    }

    get Template() {
        return `
        <div class="card bg-warning m-2 col-3 task-body d-flex flex-column justify-content-around">
        <div class="card text-light d-flex flex-column" style="background-color: ${this.color}">
        <i class="fas fa-times text-danger align-self-end m-1" onclick="app.tasksController.removeTask('${this.id}')"></i>
        <h1 class="align-self-center">${this.title}</h>
        </div>
        <ul>
        ${this.SubtaskTemplate}
        </ul>
        <div class="taskform">
        <form class="form-inline" onsubmit="app.tasksController.newSubTask(event, '${this.id}')">
                <div class="form-group">
                    <label class="mr-1" for="title">task</label>
                    <input type="text" name="subtask" id="subtask-${this.id}" class="form-control" placeholder="..." >
                </div>
                <button type="submit" class="btn btn-outline-primary">New item</button>
            </form>
            </div>
            </div>
            `
    }
    get SubtaskTemplate(){
        let template =''
        this.subtask.forEach(t => {
            template += `<li> ${t} <i class="fas fa-times text-danger align-self-end" onclick="app.tasksController.removeSubTask('${this.id}', '${t}')"></i> </li>`
        })
        
        return template
    }
}