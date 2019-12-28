import React from 'react';
import './css/style.css'

import {AskodsHeader} from './component/askods/AskodsHeader'
import {AskodsFooter} from './component/askods/AskodsFooter' 
import Lang from './component/Lang'

import Main from './Main'

function App() {
  return (
    <div className="container">
      <header>
        <AskodsHeader />
        <nav><Lang /></nav>
      </header>
      <main>
        <Main />
      </main>
      <footer><AskodsFooter/></footer>
    </div>
  );
}

export default App;
