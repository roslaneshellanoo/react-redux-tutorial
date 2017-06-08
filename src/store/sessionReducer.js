import * as types from './actions/actionTypes'
import initialState from './authState'
import { browserHistory } from 'react-router'

export default function sessionReducer (state = initialState.session, action) {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      browserHistory.push('/')
      return !!sessionStorage.token
    default:
      return state
  }
}
