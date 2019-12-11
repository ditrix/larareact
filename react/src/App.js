import React from 'react';
import Main from './Main'
import {AskodsHeader} from './component/askods/AskodsHeader'
import './css/style.css'
function App() {
  return (
    <div className="container">
      <header>
        <AskodsHeader />
      </header>
      <main>
        <hr />
        <Main />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
