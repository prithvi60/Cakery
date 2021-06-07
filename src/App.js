import React from 'react';
import NavBar from './Components/NavBar';
import PageUp from './Components/PageUp.js';
import EmailField from './Components/EmailField';
import Specality from './Components/Specality';
import Content from './Components/Content';
import Creation from './Components/Creation';
import './App.css';

function App() {
return(
<> 
{/* components */}
         <PageUp/>
        <NavBar/>
        <div className="pic-container">
        <div className="image-card"> 
        <div className="icon-logo">
        <h1 className="icon-text">Welcome to Bellaria</h1>
        </div> 
        </div>
         </div>
        <Specality/>
        <Content/>
        <Creation/>
          <EmailField/>
        <div className="footer">
          <h1 className="footer-text">Bellaria- A Delicious Cakes and Bakery </h1>
        </div>
  
</>
);
}

export default App;
