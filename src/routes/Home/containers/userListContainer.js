import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectUser } from '../../../store/actions'

class UserList extends React.Component {
  createListItems () {
    return this.props.users.map((user, i) => {
      return (
        <li
          onClick={() => this.props.selectUser(user)}
          className='list-group-item'
          key={i}>{user.name} - {user.age}</li>
      )
    })
  }
  render () {
    return (
      <ul className='list-unstyled list-group'>
        {this.createListItems()}
      </ul>
    )
  }
}
UserList.propTypes = {
  users: PropTypes.array,
  selectUser: PropTypes.func
}

const mapStateToProps = (state) => ({
  users: state.users
})
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList)
