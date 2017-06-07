import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

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

  onChange () {
    const field = event.target.name
    const credentials = this.state.credentials
    credentials[field] = event.target.valueOf()
    return this.setState({ credentials: credentials })
  }
  render () {
    return (
      <div className='wrap-login'>
        <h2>This is login page</h2>
      </div>
    )
  }
}
