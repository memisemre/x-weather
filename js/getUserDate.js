import { dateArea } from "./selectors.js";
export function getDate(){
    setInterval(()=>{
        const date = new Date();
        dateArea.innerHTML = `${date.getHours()} : ${date.getMinutes()}`
    },1000)
}