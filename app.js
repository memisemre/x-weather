import { getDate } from "./js/getUserDate.js";
import { getLocation } from "./js/getUserLocation.js";
import { loginAnimation } from "./js/loginAnimation.js";
function startApp() {
        getDate();
        getLocation();
        loginAnimation();
}

startApp();