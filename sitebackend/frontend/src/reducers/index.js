import { combineReducers } from 'redux';
import leads from './leads';
import errors from './errors';
import messages from './messages';
import auth from './auth';

/* ROOT REDUCER */
export default combineReducers({
  // 'leads' in this object is equivalent to 'leadReducer: leads'
  leads,
  errors,
  messages,
  auth,
});