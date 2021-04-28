/** REDUCERS
 * Reducers are basically functions that do the following:
 * 1. Take in an action 
 * 2. Evaluate that action based on the action's TYPE
 * 3. Return state depending on what the action does.
 * e.g. GET_LEADS and DELETE_LEAD request do diff things
 *    -> GET_LEADS updates the state with all of the leads in db
 *    -> DELETE_LEAD updates the state with everything but the requested id for deletion
*/

import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from '../actions/types.js'

const initalState = {
  leads: []
};

export default function (state = initalState, action) {
  switch (action.type) {
    case GET_LEADS:
      return {
        ...state,
        leads: action.payload
      };
    case DELETE_LEAD:
      return {
        ...state,
        leads: state.leads.filter(lead => lead.id !== action.payload)
      };
    case ADD_LEAD:
      return {
        ...state,
        leads: [...state.leads, action.payload]
      };
    default: {
      return state
    }
  }
}