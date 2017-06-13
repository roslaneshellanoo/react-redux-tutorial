// action types
export const SET_BRANCH = 'SET_BRANCH'
const initialState = 1

// action
export function setBranch (branch) {
  console.log('You selected: ', branch)
  return {
    type: SET_BRANCH,
    payload: branch
  }
}

// reducer
export default function branchReducer (state = initialState, action) {
  switch (action.type) {
    case SET_BRANCH:
      return action.payload
    default:
      return state
  }
}
