import { combineReducers } from 'redux';
import leads from './leads';


// using 'leads' in this object is equivalent to 'leadReducer: leads'
export default combineReducers({
  leads
});