import { combinTemp } from "./selectors.js";
export function selectClothes(temp){
      combinTemp.innerHTML = `Combin for ${Math.round(temp)}<sup>0</sup>`;
};

export const clothes = [
      {
            name : "beret",
            categ : "head",
            gender : "mw",
            res: 5
      },
      {
            name : "cap-man",
            categ : "head",
            gender : "man",
            res : 5
      },
      {
            name : "cap-woman",
            categ : "head",
            gender : "woman",
            res : 5
      },
      {
            name : "sun-hat",
            categ : "head",
            gender : "woman",
            res : 5
      },
      {
            name : "scarf",
            categ : "scarf",
            gender : "mw",
            res : 5
      },
      {
            name : "dress-woman",
            categ : "fullBody",
            gender : "woman",
            res : 5
      },
      {
            name : "suit-man",
            categ : "fullBody",
            gender : "woman",
            res : 5
      },
      {
            name : "skirt-woman",
            categ : "upperBody",
            gender : "woman",
            res : 5
      },
      {
            name : "tshirt-man",
            categ : "uppderBody",
            gender : "man",
            res : 5
      },
      {
            name : "tshirt-woman",
            categ : "upperBody",
            gender : "man",
            res : 5
      },
      {
            name : "pant-man",
            categ : "pants",
            gender : "man",
            res : 5
      },
      {
            name : "pant-woman",
            categ : "pants",
            gender : "man",
            res : 5
      },
      {
            name : "skirt-woman",
            categ : "pants",
            gender : "woman",
            res : 5
      },
      {
            name : "boot-man",
            categ : "shoes",
            gender : "man",
            res : 5,
      },
      {
            name : "shoes-man",
            categ : "shoes",
            gender : "man",
            res : 5
      },
      {
            name : "shoes-woman",
            categ : "shoes",
            gender : "man",
            res : 5
      },
      {
            name : "boot-woman",
            categ: "shoes",
            gender : "woman",
            res : 5
      },
      {
            name : "heels-woman",
            categ : "shoes",
            gender : "woman",
            res : 5
      }
]
export const genderIcons = [
      {
            iconName : "man-icon"
      },
      {
            iconName : "woman-icon"
      }
]

clothes.forEach((clothe)=>{
      console.log(clothe.name)
})