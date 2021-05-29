import React from 'react';
import NavBar from './NavBar';
import ScrollLeft from './ScrollLeft';
import PageUp from './PageUp.js';
import EmailField from './EmailField';
import Socials from './Socials';
import Specality from './Specality';
import './App.css';

function App() {
return(
<> 
{/* components */}
   
        <NavBar/>
        <br></br>
        <Specality/>
            <ScrollLeft/>
            <PageUp/>
         <br></br>
            <EmailField/>
            <Socials/>
        
  
</>
);
}

export default App;
