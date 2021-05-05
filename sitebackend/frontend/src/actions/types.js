/** TYPES
 * Types are just like #defines in C/C++
 * They are used in almost the exact same way as well.
 * When an action is created, it is assigned one of these type values.
 * This way, it can be evaluated very easily, and very consistently.
*/

export const GET_LEADS = 'GET_LEADS';
export const DELETE_LEAD = 'DELETE_LEAD';
export const ADD_LEAD = 'ADD_LEAD';
export const GET_ERRORS = 'GET_ERRORS';
export const CREATE_MESSAGE = 'CREATE_MESSAGE';

export const USER_LOADING = 'USER_LOADING';
export const USER_LOADED = 'USER_LOADED';
export const AUTH_ERROR = 'AUTH_ERROR';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'LOGOUT_FAIL';

export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';