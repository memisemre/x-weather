import{
	weatherImage,
	weatherTemp,
	weatherForecast,
	maxTemp,
	minTemp,
	wind
} from "./selectors.js"
export function weatherAPI(lat,long){
      let data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=b923a9422672988586e6e7f2bcef29c9&units=metric&lang=en`)
	.then((res)=>res.json())
	.then((data)=>{
		console.log(data);
		weatherImage.innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">`
		weatherTemp.innerHTML = `${data.main.temp} <sup>0</sup>`
		weatherForecast.innerHTML = `${data.weather[0].main}`
		maxTemp.innerHTML = `${data.main.temp_max} <sup>0</sup>`
		minTemp.innerHTML = `${data.main.temp_min} <sup>0</sup>`
		wind.innerHTML = `${data.wind.speed} <sup></sup>`
	})
}