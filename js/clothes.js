import { combinTemp,
      capArea,
      scarfArea,
      shirtArea,
      pantArea,
      shoesArea,
      appContainer,
      loginAnimationContainer
 } from "./selectors.js";
import { loginAnimation } from "./loginAnimation.js";
const manClothes = [
      {
            name : "beret",
            bodyArea : "cap",
            res : 2
      },
      {
            name : "cap",
            bodyArea : "cap",
            res : 1
      },
      {
            name : "scarf",
            bodyArea : "scarf",
            res : 2
      },
      {
            name : "tshirt",
            bodyArea : "shirt",
            res : 1
      },
      {
            name : "jacket",
            bodyArea : "shirt",
            res : 2
      },
      {
            name : "pants",
            bodyArea : "pant",
            res : 2
      },
      {
            name : "shorts",
            bodyArea : "pant",
            res : 1
      },
      {
            name : "shoes",
            bodyArea : "shoes",
            res : 1
      },
      {
            name : "boots",
            bodyArea : "shoes",
            res : 2
      }
]
const womanClothes = [
      {
            name : "beret",
            bodyArea : "cap",
            res : 2
      },
      {
            name : "cap",
            bodyArea : "cap",
            res : 1
      },
      {
            name : "scarf",
            bodyArea : "scarf",
            res : 2
      },
      {
            name : "woman-tshirt",
            bodyArea : "shirt",
            res : 1
      },
      {
            name : "woman-jacket",
            bodyArea : "shirt",
            res : 2
      },
      {
            name : "woman-pants",
            bodyArea : "pant",
            res : 2
      },
      {
            name : "woman-shorts",
            bodyArea : "pant",
            res : 1
      },
      {
            name : "shoes",
            bodyArea : "shoes",
            res : 1
      },
      {
            name : "boots",
            bodyArea : "shoes",
            res : 2
      }
]
let weatherColdness;
let userGender;

export function setColdness(temp,coldness){
      combinTemp.innerHTML = `Combin for ${Math.round(temp)}<sup>0</sup>`;
      weatherColdness = coldness; 
      selectClothes();
};
export function setUserGender(gender){
      userGender = gender;
      selectClothes();
};
function selectClothes(){
      appContainer.style.display = "none";
      loginAnimationContainer.style.opacity = "1";
      loginAnimationContainer.style.display = "flex";
      loginAnimation();
      if(userGender === "male"){
            manClothes.forEach((clothe)=>{
                  if(clothe.res === weatherColdness && weatherColdness === 2){
                        if(clothe.bodyArea === "cap") capArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "scarf") scarfArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "shirt") shirtArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "pant") pantArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "shoes") shoesArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  }
                  else if(clothe.res === weatherColdness && weatherColdness ===1){
                        if(clothe.bodyArea === "cap") capArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        scarfArea.style.height = "0";
                        if(clothe.bodyArea === "shirt") shirtArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "pant") pantArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "shoes") shoesArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  }
            })
      }
      else if (userGender === "female"){
            womanClothes.forEach((clothe)=>{
                  if(clothe.res === weatherColdness && weatherColdness === 2){
                        if(clothe.bodyArea === "cap") capArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "scarf") scarfArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "shirt") shirtArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "pant") pantArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "shoes") shoesArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  }
                  else if(clothe.res === weatherColdness && weatherColdness ===1){
                        if(clothe.bodyArea === "cap") capArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        scarfArea.style.height = "0";
                        if(clothe.bodyArea === "shirt") shirtArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "pant") pantArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        if(clothe.bodyArea === "shoes") shoesArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  }
            })
      }
}