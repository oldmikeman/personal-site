/** STORE
 * The redux store is basically an application level state. 
 * Each component of the application is now a child of the store in the app component tree.
 * Makes sharing information between components of large applications very easy.
 * Data that is typically stored in a component's state is now a prop that is passed in from redux.
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