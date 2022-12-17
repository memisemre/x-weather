import { getDate } from "./js/getUserDate.js";
import { getLocation } from "./js/getUserLocation.js";
import { loginAnimation } from "./js/loginAnimation.js"; 
import { alertBox } from "./js/alertPopup.js"
import { weatherCityAPI } from "./js/weatherApi.js";
import { cityNameArea,cityHoverText,changeCityContainer,appContainer, changeCityButton, changeCityInput, loginAnimationContainer , genderFemale, genderMale} from "./js/selectors.js";
import { setUserGender } from "./js/clothes.js";
function startApp() {
        getDate();
        getLocation();

        setUserGender("male");
}
startApp();
cityNameArea.addEventListener("mouseover",()=>{cityHoverText.style.opacity = "1";});
cityNameArea.addEventListener("mouseleave",()=>{cityHoverText.style.opacity = "0";});
cityNameArea.addEventListener("click",()=>{
        appContainer.style.display = "none";
        changeCityContainer.style.display = "flex";
})
changeCityInput.addEventListener("click",()=>{
        if(changeCityInput.value === "Enter city name.") changeCityInput.value = "";
})
changeCityButton.addEventListener("click",()=>{
        if(changeCityInput.value === "Enter city name." || changeCityInput.value === ""){
                alertBox("Please,enter city names.")
        }
        else {
                weatherCityAPI(changeCityInput.value);
                changeCityContainer.style.display = "none";
                loginAnimationContainer.style.display = "flex";
                loginAnimationContainer.style.opacity = "1";
                loginAnimation();
        }
})
genderFemale.onclick = ()=>{
        genderFemale.classList.add("gender-active");
        genderMale.classList.remove("gender-active");
        setUserGender("female");
}
genderMale.onclick = ()=>{
        genderMale.classList.add("gender-active");
        genderFemale.classList.remove("gender-active");
        setUserGender("male");
}