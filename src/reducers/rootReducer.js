import  Pic1 from "../images/bg1.jpg"
import  Pic2 from "../images/bg2.jpg"
import  Pic3 from "../images/bg3.jpg"
import  Pic4  from "../images/bg4.jpg"


const initState = {
  image: [
  { id: '0',
    img:Pic1,
    text:"ABC",
    price:"",
    desc:"dfgdfgdfrg"
  },
  { id: '1',
    img:Pic2,
    text:"PQR"
  },
  { id: '2',
    img:Pic3,
    text:"PQR"
  },
  { id: '3',
    img:Pic4,
    text:"PQR"
  },
  { id: '4',
    img:Pic1,
    text:"ABC"
  },
  { id: '5',
    img:Pic2,
    text:"PQR"
  },
  { id: '6',
    img:Pic3,
    text:"PQR"
  },
  { id: '7',
    img:Pic4,
    text:"PQR"
  },
  {   id: '8',
      img:Pic4,
      text:"PQR"
   }
],
counter:2,
name:"",
cart:[
  {id: '',
  img:"",
  text:"",
  price:"",
 qty:""}
]}

const rootReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
  
    case "INCREMENT": {
      console.log(action.value);
      newState.counter+=1;
      newState.name=action.value;
      
      break;
    }
    case "DECREMENT": {
      newState.counter-=1;
      break;
    }
    case "ADDTOCART": {
      newState.cart.text=action.text;
      newState.cart.qty=action.qty;
      console.log(action.text,action.qty);
      break;
    }
  default: {
    return newState
    }
  }
  // return newState;
};

export default rootReducer;