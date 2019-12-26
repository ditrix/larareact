import React from 'react';
import './css/style.css'

import {AskodsHeader} from './component/askods/AskodsHeader'
import {AskodsFooter} from './component/askods/AskodsFooter' 
//import Main from './Main'
//import SearchVehicle from './SearchVehicle'
import PolisParameters from './container/PolisParameters'

function App() {
  return (
    <div className="container">
      <header>
        <AskodsHeader />
      </header>
      <main>
        {/*<SearchVehicle />*/}
        <PolisParameters />
      </main>
      <footer><AskodsFooter/></footer>
    </div>
  );
}

export default App;
