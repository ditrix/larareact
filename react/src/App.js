import React from 'react';
import './css/style.css'

import {AskodsHeader} from './component/askods/AskodsHeader'
import {AskodsFooter} from './component/askods/AskodsFooter' 


import Main from './Main'

function App() {
  return (
    <div className="_container">
      <header>
        <AskodsHeader />
  
      </header>
      <main>
        <Main />
      </main>
      <footer><AskodsFooter/></footer>
    </div>
  );
}

export default App;
