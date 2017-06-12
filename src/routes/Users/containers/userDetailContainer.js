import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class UserDetail extends React.Component {
  render () {
    if (!this.props.user) {
      return (
        <h4>Select a user...</h4>
      )
    }
    return (
      <ul className='wrap-user-detail list-group'>
        <li className='list-group-item'>Name: {this.props.user.name}</li>
        <li className='list-group-item'>Age: {this.props.user.born}</li>
        <li className='list-group-item'>Description: {this.props.user.description}</li>
      </ul>
    )
  }
}
UserDetail.propTypes = {
  user: PropTypes.object,
  born: PropTypes.any,
  description: PropTypes.string,
}
const mapStateToProps = (state) => ({
  user: state.activeUser
})
export default connect(mapStateToProps)(UserDetail)
