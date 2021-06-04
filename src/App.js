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
      
       
         <br></br>
            <EmailField/>
            <Socials/>
        
  
</>
);
}

export default App;
