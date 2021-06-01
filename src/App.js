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
          <span className="image-card"/> 
         </div>
        <Specality/>
      
       
         <br></br>
            <EmailField/>
            <Socials/>
        
  
</>
);
}

export default App;
