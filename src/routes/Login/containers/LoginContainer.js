import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sessionActions from '../../../store/actions/sessionActions'

class LoginContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      credentials: {
        email: '',
        password: ''
      },
    }
    this.onChange = this.onChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onChange (event) {
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.value
    return this.setState({ credentials: credentials })
  }
  onSave (event) {
    event.preventDefault()
    let _email = this.state.credentials.email
    let _password = this.state.credentials.password
    if (!_email || !_password) {
      return alert('add username and password')
    }
    this.props.actions.logInUser(this.state.credentials)
  }
  render () {
    return (
      <form>
        <input
          type='text'
          name='email'
          label='email'
          value={this.state.credentials.email}
          onChange={this.onChange} />

        <input
          name='password'
          label='password'
          type='password'
          value={this.state.credentials.password}
          onChange={this.onChange} />

        <input
          type='submit'
          className='btn btn-primary'
          onClick={this.onSave} />
      </form>
    )
  }
}
LoginContainer.propTypes = {
  actions: PropTypes.object
}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(sessionActions, dispatch)
})

export default connect(null, mapDispatchToProps)(LoginContainer)
