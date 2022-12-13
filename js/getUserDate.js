import { dateArea } from "./selectors.js";
export function getDate(){
    setInterval(()=>{
        const date = new Date();
        if(date.getMinutes()<10) dateArea.innerHTML = `${date.getHours()} : 0${date.getMinutes()}`;
        else dateArea.innerHTML = `${date.getHours()} : ${date.getMinutes()}`;
    },1000);
}