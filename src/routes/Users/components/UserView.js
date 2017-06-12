import React from 'react'
import UserList from '../containers/userListContainer'
import UserDetail from '../containers/userDetailContainer'
import './UserView.scss'

export const HomeView = () => (
  <div>
    <div className='wrap-users'>
      <h2>Username List</h2>
      <UserList />
      <hr />
      <h2>
        User Details:
      </h2>
      <UserDetail />
    </div>
  </div>
)

export default HomeView
