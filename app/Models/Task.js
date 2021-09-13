import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(taskData) {
    this.id = taskData.id || generateId()
    this.completed = taskData.completed
    this.description = taskData.description
  }

  get Template() {
    return /*html*/`
    <li class="list-group-item p-0  d-flex justify-content-between bg-dark text-light">
      <div>
        <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.tasksController.toggleCompleted('${this.id}'); app.tasksController.drawTaskCount()">
        <span class="ms-2 ${this.completed ? 'checked' : ''}">${this.description}</span>
      </div>
      <i class="mdi mdi-delete mdi-24px text-danger selectable" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </li>
    `
  }
}
