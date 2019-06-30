import React from 'react';
import Posts from '../posts';
import PostForm from '../postform';

import { Provider } from 'react-redux'
import store from '../../helpers/redux/store';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostForm/>
          <hr/>
          <Posts />
        </header>
      </div>
    </Provider>
  );
}

export default App;
