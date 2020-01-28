import React,{Fragment} from 'react';


import {Provider} from 'react-redux'
import store from './store/configureStore' 
// eslint-disable-next-line
import {AskodsHeader} from './component/askods/AskodsHeader'

// eslint-disable-next-line
import {AskodsFooter} from './component/askods/AskodsFooter' 


import Main from './Main'

function App() {
  return (
    <Fragment>
      <header>
        <AskodsHeader /> 
  
      </header>
      <main>
      <Provider store={store}>
        <Main />
        </Provider>
      </main>
      <footer className="main-footer clearfix">

       {/* <AskodsFooter/>  */}
       
      </footer>
    </Fragment>
  );
}

export default App;
