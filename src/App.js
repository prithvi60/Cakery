import React from 'react'

// import NavBar from './Components/NavBar';
import EmailField from './Components/EmailField';
import PageUp from './Components/PageUp';
import {ReactComponent as CurvyTop} from './images/shape_copyright_1.svg'

// Pages
import HomePage from './Views/HomePage';
import Contact from './Views/Contact';
import Pages from './Views/Pages';
import Portfolio from './Views/Portfolio';
import Blog from './Views/Blog';
import Shop from './Views/Shop';
import Cart from './Views/Cart';
import Checkout from './Views/Checkout';


import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Account from './Views/Account';

function App() {

return(
<Router>
  <> 
  <PageUp/>
  {/* <NavBar/> */}
  {/* router */}
  <Switch>
    <Route exact path="/">
      <HomePage/>
      </Route>

      <Route path="/contact">
      <Contact/>
      </Route>

      
      <Route path="/pages">
      <Pages/>
      </Route>
      
      <Route path="/portfolio">
      <Portfolio/>
      </Route>
      
      <Route path="/blog">
      <Blog/>
      </Route>
      
      <Route path="/shop">
      <Shop/>
      </Route>

      <Route path="/cart">
      <Cart/>
      </Route>

      <Route path="/checkout">
      <Checkout/>
      </Route>

      <Route path="/account">
      <Account/>
      </Route>

  </Switch>

  <EmailField/>
          <div className="footer">
            <div>
              <CurvyTop/>
            </div>
            <h1 className="footer-text">Bellaria- A Delicious Cakes and Bakery </h1>
          </div>
  </>
</Router>
);
}

export default App;
