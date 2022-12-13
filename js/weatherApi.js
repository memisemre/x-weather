import{cityArea,
	weatherImage,
	weatherTemp,
	weatherForecast,
	maxTemp,
	minTemp,
	wind
} from "./selectors.js"
import { alertBox } from "./alertPopup.js"

export function weatherAPI(lat,long){
      let data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b923a9422672988586e6e7f2bcef29c9&units=metric&lang=en`)
	.then((res)=>res.json())
	.then((data)=>{
		cityArea.innerHTML = `${data.name}`;
		weatherImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;
		weatherTemp.innerHTML = `${data.main.temp}<sup>0</sup>`;
		weatherForecast.innerHTML = `${data.weather[0].main}`;
		maxTemp.innerHTML = `${data.main.temp_max}<sup>0</sup>`;
		minTemp.innerHTML = `${data.main.temp_min}<sup>0</sup>`;
		wind.innerHTML = `${data.wind.speed}<sup></sup>`;
		console.log(data)
	})
}
export function weatherCityAPI(city){
	let data = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b923a9422672988586e6e7f2bcef29c9&units=metric&lang=en`)
	.then((res)=>res.json())
	.then((data)=>{
		if(data.cod === "404")alertBox("Please, check city name. Don't use the turkish characters.") 
		else{
			cityArea.innerHTML = `${data.name}`;
			weatherImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`;
			weatherTemp.innerHTML = `${data.main.temp}<sup>0</sup>`;
			weatherForecast.innerHTML = `${data.weather[0].main}`;
			maxTemp.innerHTML = `${data.main.temp_max}<sup>0</sup>`;
			minTemp.innerHTML = `${data.main.temp_min}<sup>0</sup>`;
			wind.innerHTML = `${data.wind.speed}<sup></sup>`;
		}
	})
}
// const temporaryData = fetch("https://api.openweathermap.org/data/2.5/weather?q=ankara&appid=b923a9422672988586e6e7f2bcef29c9&units=metric&lang=en")
// .then((res)=>res.json())
// .then((res)=>{
// 	  if(res.cod === "404" ){
// 		    console.log("error");
// 	  } 
// 	  else console.log(res);
// })