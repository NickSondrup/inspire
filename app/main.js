import { ClockController } from "./Controllers/ClockController.js";
import { ImageController } from "./Controllers/ImageController.js";
import { QuotesController } from "./Controllers/QuotesController.js";
import { TasksController } from "./Controllers/TasksController.js";
import { WeatherController } from "./Controllers/WeatherController.js";



class App {
  clockController = new ClockController()
  imageController = new ImageController()
  tasksController = new TasksController()
  quotesController = new QuotesController()
  weatherController = new WeatherController()

}

window["app"] = new App();
