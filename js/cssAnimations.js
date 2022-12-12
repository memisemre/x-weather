import { loadingAnimationContainer, appContainer } from "./selectors.js"
export function destroyLoadingAnimation(){
    setTimeout(()=>{
        loadingAnimationContainer.style.transition = "0.3s";
        loadingAnimationContainer.style.opacity = "0";
        loadingAnimationContainer.style.display = "flex";
        setTimeout(()=>{
            appContainer.style.display = "grid";
            setTimeout(()=>{appContainer.style.opacity = "1"},1500)
        },1000)
    },2500)
}