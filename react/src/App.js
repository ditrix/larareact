import React from 'react';
import './css/style.css'
import './css/response.css'

import {Provider} from 'react-redux'
import store from './store/configureStore' 
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
      <Provider store={store}>
        <Main />
        </Provider>
      </main>
      <footer>

      {/* <AskodsFooter/> */}
      </footer>
    </div>
  );
}

export default App;
