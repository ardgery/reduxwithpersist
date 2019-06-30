import React from 'react';
import Posts from '../posts';
import PostForm from '../postform';

import { Provider } from 'react-redux'
import {store, persistor} from '../../helpers/redux/store';
import { PersistGate } from 'redux-persist/integration/react'


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <header className="App-header">
            <PostForm/>
            <hr/>
            <Posts />
          </header>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
