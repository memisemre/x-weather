import { dateTime  } from "./selectors.js";
export function createDate(){
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    const date = new Date();
    dateTime.textContent = `${date.getHours()}:${date.getMinutes()} ${days[date.getDay()]}`;
}