import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(taskData) {
    this.id = taskData.id || generateId()
    this.completed = taskData.completed
    this.description = taskData.description
  }

  get Template() {
    return /*html*/`
    <li class="list-group-item py-2 d-flex justify-content-between">
      <div>
        <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.tasksController.toggleCompleted('${this.id}')">
        <span class="ms-2 ${this.completed ? 'checked' : ''}">${this.description}</span>
      </div>
      <i class="mdi mdi-delete mdi-24px text-danger selectable" onclick="app.tasksController.deleteTask('${this.id}')"></i>
    </li>
    `
  }
}
