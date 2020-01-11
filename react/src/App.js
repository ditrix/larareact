import React from 'react';
import './css/style.css'
import './css/response.css'

// eslint-disable-next-line
import {AskodsHeader} from './component/askods/AskodsHeader'

// eslint-disable-next-line
import {AskodsFooter} from './component/askods/AskodsFooter' 


import Main from './Main'

function App() {
  return (
    <div className="_container">
      <header>
        {/* <AskodsHeader /> */}
  
      </header>
      <main>
        <Main />
      </main>
      <footer>

      {/* <AskodsFooter/> */}
      </footer>
    </div>
  );
}

export default App;
