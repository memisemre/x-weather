import { combinTemp,
      capArea,
      scarfArea,
      shirtArea,
      pantArea,
      shoesArea
 } from "./selectors.js";
export const genderIcons = [
      {
            iconName : "man-icon"
      },
      {
            iconName : "woman-icon"
      }
]
export const clothes = [
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
            name : "shirt",
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
export function setValues(temp,coldness){
      combinTemp.innerHTML = `Combin for ${Math.round(temp)}<sup>0</sup>`;
      selectClothes(coldness);
};
function selectClothes(coldness){
      clothes.forEach((clothe)=>{
            if(clothe.res === coldness){
                  if(clothe.bodyArea === "cap") capArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  if(clothe.bodyArea === "scarf") scarfArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  if(clothe.bodyArea === "shirt") shirtArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  if(clothe.bodyArea === "pant") pantArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                  if(clothe.bodyArea === "shoes") shoesArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
            }
      })
}