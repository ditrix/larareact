import React from 'react';
import './css/style.css'

//import Main from './Main'
//import SearchVehicle from './SearchVehicle'
import PolisParameters from './container/PolisParameters'

function App() {
  return (
    <div className="container">
      <header>
      </header>
      <main>
        {/*<SearchVehicle />*/}
        <PolisParameters />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
