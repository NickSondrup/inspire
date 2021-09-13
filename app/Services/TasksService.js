import { ProxyState } from "../AppState.js"
import { Task } from "../Models/Task.js";

// @ts-ignore
let tasksApi = axios.create({
  baseURL: 'https://bcw-sandbox.herokuapp.com/api/nick/todos'
})

class TasksService{
  constructor(){
    this.getTasks()
  }
  async createTask(taskData) {
    let newTask = new Task (taskData)
    let res = await tasksApi.post('', newTask)
    console.log(res.data)
    ProxyState.tasks = [...ProxyState.tasks, new Task(res.data)]
    
  }
  
  async getTasks(){
    let res = await tasksApi.get()
    ProxyState.tasks = res.data.map(t => new Task(t))
    console.log(ProxyState.tasks);
  }

  async toggleCompleted(taskId) {
    const task = ProxyState.tasks.find(t => t.id === taskId)
    task.completed = !task.completed
    await tasksApi.put(`${taskId}`, task)
    this.tasksCount()
  }
  
  async deleteTask(taskId) {
    await tasksApi.delete(taskId)
    ProxyState.tasks = ProxyState.tasks.filter(t => t.id !== taskId)
  }

  tasksCount(){
    let checkedCount = 0
   let totalCount = ProxyState.tasks.length
   let checkedTasks = ProxyState.tasks.filter(f => f.completed === true)
    checkedCount = checkedTasks.length
    
   return(checkedCount + '/' + totalCount)
  }

}

export const tasksService = new TasksService()