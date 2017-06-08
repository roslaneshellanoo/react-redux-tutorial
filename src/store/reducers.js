import { combineReducers } from 'redux'
import locationReducer from './location'
import userReducer from './reducer-users'
import ActiveUserReducer from './reducer-active-user'
import sessionReducer from './sessionReducer'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    session: sessionReducer,
    users: userReducer,
    activeUser: ActiveUserReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
