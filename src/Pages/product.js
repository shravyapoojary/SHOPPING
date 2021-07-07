

import  image1 from './Images/image1.jpg';
import  image2 from './Images/image2.jpg';
import  image3 from './Images/image3.jpg';
import  image4 from './Images/image4.jpg';
import  image5 from './Images/image5.jpg';
import  image6 from './Images/image6.jpg';

const initialState = [
   {
      name:"Headphone",
      price:"$20",
      key:"1",
      image:image1,
      detail:"Lorem ipsum sit amen constructor ",
      count:1
   },
   {
      name:"Metal Headphone",
      price:"$10",
      key:"2",
      image:image2,
      detail:"Lorem ipsum sit amen constructor ",
      count:1
         },
   {
         name:"Poloroid Camera",
         price:"$5",
         key:"3",
         image:image3,
         detail:"Lorem ipsum sit amen constructor ",
         count:1
 },
 {
   name:"Coffee",
   price:"$6",
   key:"4",
   image:image4,
   detail:"Lorem ipsum sit amen constructor ",
   count:1
},
{
   name:"Pot Plant",
   price:"$7",
   key:"5",
   image:image5,
   detail:"Lorem ipsum sit amen constructor ",
   count:1
},
{
   name:"White Cube",
   price:"$50",
   key:"6",
   image:image6,
   detail:"Lorem ipsum sit amen constructor ",
   count:1
}

]
   
const ShopItems = () => {
   return initialState;
 };
 
 export default ShopItems;

