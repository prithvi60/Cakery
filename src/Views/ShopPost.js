import React, { Component } from 'react'
import NavBar from '../Components/NavBar';
import Slab from '../Components/Slab'


class ShopPost extends Component {
  state = {
    id: null
  }
  componentDidMount(){
    console.log(this.props);
    let id = this.props.match.params.item_id;
    this.setState({
      id: id
    })
  }
  render() {
    return (<>
        <NavBar/>
        <Slab header="Shop" para={this.state.id}/>
      <div className="shop-container">
        <h4>img</h4>
        <h1>title</h1>
        <p>25$</p>
        <p>Est accumsan. Eros nec odio penatibus erat elementum nullam, praesent pede et, nulla bibendum est ut facilisi varius, metus nunc nulla integer cum hendrerit. Eget sed, sed viverra ut metus sollicitudin morbi, massa neque fusce sem, mi lacinia ipsum.</p>
         <h2>Quantity 1</h2>
        <button>Add To Cart</button>
      </div>
      </>
    )
  }
}

export default ShopPost