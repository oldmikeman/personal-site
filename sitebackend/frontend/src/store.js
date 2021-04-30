/** STORE
 * The redux store is basically an application level state. 
 * Each component of the application is now a child of the store in the app component tree.
 * Makes sharing information between components of large applications very easy.
 * Data that is typically stored in a component's state is now a prop that is passed in from redux.
 * 
 * Importing rootReducer from ./reducers automatically looks for index.js inside of ./reducers
*/

import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware))
);

export default store;