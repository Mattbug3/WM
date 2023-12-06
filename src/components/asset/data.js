import women_main_coat_1 from './women-images/women-main-coat-1.jpg'
import men_main_coat_2 from './men-images/men-main-coat-2.jpg'
import women_main_dress_5 from './women-images/women-main-dress-5.jpg'
import men_main_hoodie_3 from './men-images/men-main-hoodie-3.jpg'

import women_small_coat_1_1 from './women-images/women-small-coat1-1.jpg'
import women_small_coat_1_2 from './women-images/women-small-coat1-2.jpg'
import women_small_coat_1_3 from './women-images/women-small-coat1-3.jpg'
import women_small_coat_1_4 from './women-images/women-small-coat1-4.jpg'

import men_small_coat2_1 from './men-images/men-small-coat2-1.jpg'
import men_small_coat2_2 from './men-images/men-small-coat2-2.jpg'
import men_small_coat2_3 from './men-images/men-small-coat2-3.jpg'
import men_small_coat2_4 from './men-images/men-small-coat2-4.jpg'

import women_small_dress_5_1 from './women-images/women-small-dress5-1.jpg'
import women_small_dress_5_2 from './women-images/women-small-dress5-2.jpg'
import women_small_dress_5_3 from './women-images/women-small-dress5-3.jpg'
import women_small_dress_5_4 from './women-images/women-small-dress5-4.jpg'

import men_small_hoodie3_1 from './men-images/men-small-hoodie3-1.jpg'
import men_small_hoodie3_2 from './men-images/men-small-hoodie3-2.jpg'
import men_small_hoodie3_3 from './men-images/men-small-hoodie3-3.jpg'

const data = [
  {
    "id": 1,
    "name": "Tweed Boucle Notched Blazer",
    "size": "",
    "gender": "women",
    "category": "jackets_coats",
    "image": women_main_coat_1,
    "smallImgs":[
     women_main_coat_1,women_small_coat_1_1, women_small_coat_1_2, women_small_coat_1_3, women_small_coat_1_4,
     ],
    "price": 249.0,
    "description":"Details A tweed boucle blazer featuring notched lapels, double-breasted construction, front flap pockets, and long sleeves with buttoned cuffs.Content + Care - Shell: 77% polyester, 15% rayon, 6% other fibers, 1% nylon, 1% wool - Lining: 100% polyester - Hand wash cold Size + Fit - Model is 5'8 and weaing a Small Item"
   },

   {
    "id": 26,
    "name": "Utility-Strap Trucker Jacket",
    "size": "",
    "gender": "men",
    "category": "jackets_coats",
    "image": men_main_coat_2 ,
    "smallImgs":[
      men_main_coat_2 ,men_small_coat2_1, men_small_coat2_2, men_small_coat2_3, men_small_coat2_4
     ],
    "price": 100.0,
    "description": "A woven trucker jacket featuring a basic collar, high-polish hardware, button-front closures, buttoned chest flap pocket, utility strap attached from the chest to back, slanted front pockets, and dropped long sleeves with buttoned cuffs. Content + Care - 100% cotton - Machine wash cold Size + Fit - Model is wearing Small Item",
   },

   {
    "id": 10,
    "name": "Satin Paisley Crisscross Slip Dress",
    "size": "",
    "gender": "women",
    "category": "dresses",
    "image": women_main_dress_5,
    "smallImgs":[
     women_main_dress_5,women_small_dress_5_1, women_small_dress_5_2, women_small_dress_5_3, women_small_dress_5_4,
     ],
    "price": 85.0,
    "description": "A satin midi dress featuring an allover paisley print, sweetheart neckline, cami straps that crisscross and self-tie in the back, and a leg slit.Content + Care - 100% polyester - Hand wash cold Size + Fit - Model is 5'9 and wearing a Small Item",
   },

   {
    "id": 39,
    "name": "Premium Textured Hoodie",
    "size": "",
    "gender": "men",
    "category": "jumpers_hoodies",
    "image": men_main_hoodie_3,
    "smallImgs":[
      men_main_hoodie_3,men_small_hoodie3_1, men_small_hoodie3_2, men_small_hoodie3_3
     ],
    "price": 146.0,
    "description": "Our premium weight textured fabric takes this really clean and simple style to the next level. A wear on repeat favourite, this top pairs well with everyday jeans and adds an elevated edge to your casual wear.Machine washable.84% Polyester, 15% Viscose, 1% Elastane",
   },

]

export default data