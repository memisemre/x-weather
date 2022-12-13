import { loginAnimationContainer,appContainer } from "./selectors.js";
export function loginAnimation(){
      setTimeout(()=>{
            loginAnimationContainer.style.transition = "0.5s all ease";
            loginAnimationContainer.style.opacity = "0";
            setTimeout(()=>{
                  loginAnimationContainer.style.display = "none";
                  setTimeout(()=>{
                        appContainer.style.display = "grid";
                  },250)
            },500)
      },3000)
}