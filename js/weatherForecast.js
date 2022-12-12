export function weatherApi(){
         if(navigator.geolocation){
                   navigator.geolocation.getCurrentPosition((position) => {
                             let data = fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.longitude}&lon=${position.coords.latitude}&appid=b923a9422672988586e6e7f2bcef29c9&units=metric&lang=en`)
                                       .then((res) => res.json())
                                       .then((data) => {
                                                 console.log(data);
                                       });
                   });
          }
 }
