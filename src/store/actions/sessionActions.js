import * as types from '../actions/actionTypes'
import sessionApi from '../api/SessionApi'

export function loginSuccess () {
  return { type: types.LOG_IN_SUCCESS }
}

export function logInUser (credentials) {
  return function (dispatch) {
    return sessionApi.login(credentials).then(response => {
      console.log(response)
      sessionStorage.setItem('token', response.token)
      dispatch(loginSuccess())
    }).catch(error => {
      throw (error)
    })
  }
}
