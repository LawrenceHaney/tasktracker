import {generateId} from "../utils.js"
export default class Task {
    constructor({title, color, id, subtask, dubtask}) {
        this.title = title
        this.color = color
        this.id = id || generateId()
        this.subtask= subtask || []
        this.dubtask = dubtask || []
    }

    get Template() {
        return `
        <div class="card bg-light m-2 pb-1 col-12 col-lg-3 task-body container-fluid d-flex flex-column justify-content-around">
        <div class="card row text-light text-shadow d-flex flex-column p-1" style="background-color: ${this.color}">
        <i class="fas fa-thumbtack text-danger align-self-end m-1" onclick="app.tasksController.removeTask('${this.id}')"></i>
        <h1 class="align-self-center">${this.title}</h>
        </div>
        <ul class="fa-ul">
        ${this.SubtaskTemplate}
        </ul>
        <ul class="fa-ul">
        ${this.DubtaskTemplate}
        </ul>
        <div class="taskform">
        <form class="form-inline" onsubmit="app.tasksController.newSubTask(event, '${this.id}')">
                <div class="form-group">
                    <input type="text" name="subtask" id="subtask-${this.id}" class="form-control" placeholder="new task" >
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
            template += `<li class="text-shadow justify-content-around list-css">
            <span class="fa-li">
            <i class="fas fa-thumbtack fa-rotate-90 text-danger" onclick="app.tasksController.removeSubTask('${this.id}', '${t}')"></i> 
            </span>
            <p onclick="app.tasksController.moveToDone('${this.id}', '${t}')">${t}</p>
            </li>`
        })
        
        return template
    }
    
    get DubtaskTemplate(){
        let template =''
        this.dubtask.forEach(t => {
            template += `<li class="text-shadow list-css">
            <span class="fa-li">
            <i class="fas fa-thumbtack fa-rotate-90 text-danger" onclick="app.tasksController.removeDubTask('${this.id}', '${t}')"></i> 
            </span>
            <s onclick="app.tasksController.moveToList('${this.id}', '${t}')">${t}</s>
            </li>`
        })
        
        return template
    }
}