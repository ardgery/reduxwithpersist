import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const initialState = {};
const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage,
  } 
const persistedReducer = persistReducer(persistConfig, rootReducer)
const configureStore = () => {
    const store = createStore(
        persistedReducer, 
        initialState, 
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        
    );
    
    return store;
};
export const store = configureStore();
export const persistor = persistStore(store);