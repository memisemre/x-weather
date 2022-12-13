import { customPopupContainer,customPopupButton,customPopupText } from "./selectors.js";
export function alertBox(text){
      customPopupContainer.style.display = "flex";
      customPopupText.innerHTML = `${text}`;
      customPopupButton.addEventListener("click",()=>{
            customPopupContainer.style.display = "none";
      })
}