import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { TasksController } from "./Controllers/TasksController.js";


class App {
  clockController = new ClockController()
  imageController = new ImageController()
  tasksController = new TasksController()
}

window["app"] = new App();
