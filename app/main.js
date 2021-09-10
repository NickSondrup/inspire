import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";


class App {
  clockController = new ClockController()
  imageController = new ImageController()
  tasksController = new TasksController()
  quotesController = new QuotesController()
}

window["app"] = new App();
