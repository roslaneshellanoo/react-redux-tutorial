import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class LoginContainer extends React.Component {
  render () {
    return (
      <div className='wrap-login'>
        <h2>This is login page</h2>
      </div>
    )
  }
}
