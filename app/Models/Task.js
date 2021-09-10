import { generateId } from "../Utils/generateId.js"

export class Task {
  constructor(taskData) {
    this.id = taskData.id || generateId()
    this.completed = taskData.completed
    this.description = taskData.description
  }

  get Template() {
    return /*html*/`
    <li class="list-group-item py-2">
      <input type="checkbox" ${this.completed ? 'checked' : ''} onclick="app.tasksController.toggleCompleted('${this.id}')">
      <span class="ms-2">${this.description}</span>
    </li>
    `
  }
}
