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
    ProxyState.on('tasks', tasksService.tasksCount)
    ProxyState.on('tasks', this.drawTaskCount)
    
  }
drawTaskCount(){
  document.getElementById('task-count').innerText = tasksService.tasksCount()
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
async toggleCompleted(taskId){
try {
  await tasksService.toggleCompleted(taskId)
} catch (error) {
  console.log('☢ toggleCompleted', error)
}
_drawTasks()
}

async deleteTask(taskId){
  let result = window.confirm('Do you want to delete this?')
  if(result == true){
    try {
        tasksService.deleteTask(taskId)
    } catch (error) {
       console.log("☣ deleteTask", error)
    }
  }
}

}