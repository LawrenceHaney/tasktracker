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
        <div class="card bg-warning offset-1 col-3">
        <div class="card text-light d-flex flex-column" style="background-color: ${this.color}">
        <i class="fas fa-times text-danger align-self-end" onclick="app.tasksController.removeTask('${this.id}')"></i>
        <h1 class="align-self-center">${this.title}</h>
        </div>
        <ol>
        ${this.SubtaskTemplate}
        </ol>
        <div>
        <form class="form-inline row" onsubmit="app.tasksController.newSubTask(event, '${this.id}')">
                <div class="form-group">
                    <label class="mr-1" for="title">task</label>
                    <input type="text" name="subtask" id="subtask-${this.id}" class="form-control" placeholder="..." >
                </div>
                <button type="submit" class="btn btn-outline-primary"></button>
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