import { weatherAPI } from "./weatherApi.js";
export function getLocation(){
      if(navigator.geolocation) navigator.geolocation.getCurrentPosition((position)=>{
            weatherAPI(position.coords.latitude,position.coords.longitude)
      })
}