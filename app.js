import { getDate } from "./js/getUserDate.js";
import { getLocation } from "./js/getUserLocation.js";
import { loginAnimation } from "./js/loginAnimation.js";
import { cityNameArea,cityHoverText } from "./js/selectors.js";
function startApp() {
        getDate();
        getLocation();
        loginAnimation();
}
startApp();
cityNameArea.addEventListener("mouseover",(e)=>{
        cityHoverText.style.opacity = "1";
});
cityNameArea.addEventListener("mouseleave",()=>{
        cityHoverText.style.opacity = "0";
});