import React from 'react'
import LoginContainer from '../containers/LoginContainer'
export default class LoginView extends React.Component {
  render () {
    return (
      <div className='wrap-login'>
        <h2>This is login page</h2>
        <LoginContainer />
      </div>
    )
  }
}
