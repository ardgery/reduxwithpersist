import React from 'react';
import './App.css';
import Posts from './components/posts';
import PostForm from './components/postform';

import { Provider } from 'react-redux'
import store from './redux/store';


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
