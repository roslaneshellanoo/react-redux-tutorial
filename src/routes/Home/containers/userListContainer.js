import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { selectUser } from '../../../store/actions'
import createStore from '../../../store/createStore'
const store = createStore()

class UserList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      branchValue: ''
    }
    store.subscribe(() => {
      this.setState({
        branchValue: store.getState().branchReducer
      })
    })
  }

  componentDidMount () {
    console.log(this.state.branchValue)
  }

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
      <div>
        <h2>This is branch value: {this.props.branchValue}</h2>
        <ul className='list-unstyled list-group'>
          {this.createListItems()}
        </ul>
      </div>
    )
  }
}
UserList.propTypes = {
  users: PropTypes.array,
  selectUser: PropTypes.func,
  branchValue: PropTypes.any
}

const mapStateToProps = (state) => ({
  users: state.users,
  branchValue : state.branchReducer
})
const matchDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectUser: selectUser }, dispatch)
}
export default connect(mapStateToProps, matchDispatchToProps)(UserList)
