import React from 'react';
import NavBar from './NavBar';
import PageUp from './PageUp.js';
import EmailField from './EmailField';
import Socials from './Socials';
import Specality from './Specality';
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
          <EmailField/>
          <Socials/>
        <div className="footer">
          <h1 className="footer-text">Bellaria- A Delicious Cakes and Bakery </h1>
        </div>
  
</>
);
}

export default App;
