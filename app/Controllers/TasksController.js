import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"


function _drawTasks(){
  let template = ''
  ProxyState.tasks.forEach(t => template += t.Template)
  document.getElementById('tasks').innerHTML = template
}
export class TasksController{
  constructor(){
    _drawTasks()
    ProxyState.on('tasks', _drawTasks)
  }

createTask(){
  event.preventDefault()
  /**
   * @type {HTMLFormElement}
   */
  // @ts-ignore
  let form = event.target
  let taskData = {
    description: form.taskDescription.value,
  }
  try{tasksService.createTask(taskData)}
  catch(error){console.log('☢createTask', error)}
  form.reset()
}

}