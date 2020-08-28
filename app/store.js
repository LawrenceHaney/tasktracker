import Task from "./Models/Task.js";

let _state = {

  tasks: [
  ]
};
function _loadData(){
  let data = JSON.parse(localStorage.getItem("data"))
  if (data){
    data.tasks = data.tasks.map(t => new Task(t))
    _state = data
  }
  }

_loadData()
class Store {
  /**
   * Provides access to application state data
   */
  get State() {
    return _state;
  }
  saveData(){
    localStorage.setItem("data", JSON.stringify(_state))
  }
}

const STORE = new Store();
export default STORE;
