export const selectUser = (user) => {
  console.log('you clicked on user:', user.name)
  return {
    type: 'User_SELECTED',
    payload: user
  }
}
