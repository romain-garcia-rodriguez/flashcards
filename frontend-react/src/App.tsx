// Dependencies
import React from 'react';
import {Provider} from 'react-redux'
import Routing from './routing/index'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
