import { weatherApi } from "./js/weatherForecast.js";
import { getDate } from "./js/date.js";
function startApp() {
          weatherApi();
          getDate();
}
startApp();