import { GifsController } from "./Controllers/GifsController.js";
import { GiftsController } from "./Controllers/GiftsController.js";



class App {
  giftsController = new GiftsController()

  gifsController = new GifsController()
}

window["app"] = new App();
