export const SET_BRANCH = 'branch/SET_BRANCH'
const initialState = 1

export default function branchReducer (state = initialState, action) {
  switch (action.type) {
    case SET_BRANCH:
      return {
        currentBranch: action.branch
      }
    default:
      return state
  }
}

export function setBranch (branch) {
  return {
    type: SET_BRANCH,
    branch
  }
}
