import React from 'react'

import NavBar from './Components/NavBar';
import EmailField from './Components/EmailField';
import PageUp from './Components/PageUp';

import HomePage from './Views/HomePage';

function App() {
return(
<> 
<PageUp/>
<NavBar/>

{/* router */}
<HomePage/>

<EmailField/>
        <div className="footer">
          <h1 className="footer-text">Bellaria- A Delicious Cakes and Bakery </h1>
        </div>
</>
);
}

export default App;
