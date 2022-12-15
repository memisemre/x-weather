import { combinTemp,
      combinCap,
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
            categ : "head",
            gender : "mw",
            res: 3
      },
      {
            name : "cap-man",
            categ : "head",
            gender : "man",
            res : 2
      },
      {
            name : "cap-woman",
            categ : "head",
            gender : "woman",
            res : 2
      },
      {
            name : "sun-hat",
            categ : "head",
            gender : "woman",
            res : 1
      },
      {
            name : "scarf",
            categ : "scarf",
            gender : "mw",
            res : 3
      },
      {
            name : "dress-woman",
            categ : "fullBody",
            gender : "woman",
            res : 2
      },
      {
            name : "suit-man",
            categ : "fullBody",
            gender : "woman",
            res : 2
      },
      {
            name : "tshirt-man",
            categ : "upperBody",
            gender : "man",
            res : 2
      },
      {
            name : "tshirt-woman",
            categ : "upperBody",
            gender : "man",
            res : 1
      },
      {
            name : "pant-man",
            categ : "pants",
            gender : "man",
            res : 2
      },
      {
            name : "pant-woman",
            categ : "pants",
            gender : "woman",
            res : 2
      },
      {
            name : "skirt-woman",
            categ : "pants",
            gender : "woman",
            res : 1
      },
      {
            name : "boot-man",
            categ : "shoes",
            gender : "man",
            res : 3
      },
      {
            name : "shoes-man",
            categ : "shoes",
            gender : "man",
            res : 2
      },
      {
            name : "shoes-woman",
            categ : "shoes",
            gender : "woman",
            res : 2
      },
      {
            name : "boot-woman",
            categ: "shoes",
            gender : "woman",
            res : 3
      },
      {
            name : "heels-woman",
            categ : "shoes",
            gender : "woman",
            res : 1
      }
]
export function setValues(temp,coldness){
      combinTemp.innerHTML = `Combin for ${Math.round(temp)}<sup>0</sup>`;
      selectClothes(coldness);
};
function selectClothes(coldness){
      clothes.forEach((clothe)=>{
            if(clothe.res === coldness){
                  if(clothe.gender === "man"){
                        console.log(clothe)
                        if(clothe.categ === "shoes"){
                              shoesArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        }
                        if(clothe.categ === "pants"){
                              pantArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        }
                        if(clothe.categ === "upperBody"){
                              shirtArea.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        }
                        if(clothe.categ === "head"){
                              combinCap.innerHTML = `<img src="./img/${clothe.name}.png" alt="">`;
                        }
                  }
            }
      })
}