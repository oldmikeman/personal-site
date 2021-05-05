import axios from 'axios';

import { createMessage, returnErrors } from '../actions/messages';
import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from './types';
import { tokenConfig } from './auth';

/** REMINDER NOTES ABOUT CURRIED FUNCTIONS
 * Here, getLeads is being set equal to a function that has no input.
 * This function returns a function that uses dispatch as its input.
 * The function on dispatch calls an axios GET request.
 * 
 * WITHOUT curried/arrow notation, getLeads looks like:
 *
 *   export const getLeads = function (){
 *    return function (dispatch) {
 *      axios.get('/api/leads/')
 *      ...
 *    }
 *  }
*/

// GET LEADS
export const getLeads = () => (dispatch, getState) => {
  axios.get('/api/leads/', tokenConfig(getState))
    .then(res => {
      dispatch({
        type: GET_LEADS,
        payload: res.data
      })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

// DELETE LEAD
export const deleteLead = (id) => (dispatch, getState) => {
  axios.delete(`/api/leads/${id}/`, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ deleteLead: "Lead Deleted!" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id
      });
    }).catch(err => console.log(err));
}

//ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
  axios.post('/api/leads/', lead, tokenConfig(getState))
    .then(res => {
      dispatch(createMessage({ addLead: "Lead Added!" }));
      dispatch({
        type: ADD_LEAD,
        payload: res.data
      })
    }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}