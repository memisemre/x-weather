import { animationDynamicText,loginAnimationContainer } from "./selectors.js";
export function loginLoaderAnimation() {
          setTimeout(() => {
                    animationDynamicText.innerHTML = "Finding your location...";
                    setTimeout(() => {
                              animationDynamicText.innerHTML = "Getting the weather condition..";
                              setTimeout(() => {
                                        loginAnimationContainer.style.transition = "0.5s all ease";
                                        loginAnimationContainer.style.opacity = "0";
                                        setTimeout(() => {
                                                  loginAnimationContainer.style.display = "none";
                                                  
                                        }, 500);
                              }, 5000);
                    }, 2000);
          }, 3000);
}