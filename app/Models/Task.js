import {generateId} from "../utils.js"
export default class Task {
    constructor({title, id}) {
        this.title = title
        this.id = id || generateId()
        this.subtask= []
    }

    get Template() {
        return `
        <div class="card bg-warning">
        <div class="card bg-primary text-light d-flex flex-column">
        <i class="fas fa-times text-danger align-self-end"></i>
        <h1 class="align-self-center">${this.title}</h>
        </div>
        <ol>
        ${this.SubtaskTemplate}
        </ol>
        <div>
        <form class="form-inline row" onsubmit="app.tasksController.newSubTask(event, '${this.id}')">
                <div class="form-group p-2">
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
            template += `<li> ${t} <i class="fas fa-times text-danger align-self-end"></i> </li>`
        })
        
        return template
    }
}