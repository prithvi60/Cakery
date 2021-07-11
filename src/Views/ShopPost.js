import React, { Component } from 'react'
import NavBar from '../Components/NavBar';
import Slab from '../Components/Slab';
import { connect } from 'react-redux';
let name='Prithvi';

class ShopPost extends Component {


  render() {
    return (<>
        <NavBar/>
        <Slab header="Shop" para={this.props.images.id}/>
      <div className="shop-container">
        {/* image using redux state */}
        <div className="creation" style={{backgroundImage: `url("${this.props.images.img}")` ,marginLeft: "12%",marginTop: "15%"}}/>
        <h1>{this.props.images.text}</h1>
        <p>25$</p>
        <p>Est accumsan. Eros nec odio penatibus erat elementum nullam, praesent pede et, nulla bibendum est ut facilisi varius, metus nunc nulla integer cum hendrerit. Eget sed, sed viverra ut metus sollicitudin morbi, massa neque fusce sem, mi lacinia ipsum.</p>
         <h2>Quantity 1</h2>
         <h1>{this.props.counter}</h1>
         <h1>{this.props.name}</h1>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.sub}>-</button>

        <button  onClick={this.props.addToCart}>Add To Cart</button>
      </div>
      </>
    )
  }
}
// Redux function map/subscribe to prop 
const mapStateToProps =(state, ownProps)=>{
  let id = ownProps.match.params.item_id;
return{
  images: state.image.find(images => images.id === id ),
  counter:state.counter,
  name:state.name,
  qty:state.cart.qty
}

}
// Redux function dispatch actions/data to Redux
const mapDispatchToProps = (dispatch) => {
  return {
    add: () => dispatch({ type: "INCREMENT",value: name}),
    sub: () => dispatch({type: "DECREMENT"}),
    addToCart: () => dispatch({type: "ADDTOCART", qty: ShopPost.props.counter, text: ShopPost.props.images.text})

  };
};



export default connect(mapStateToProps,mapDispatchToProps)(ShopPost)