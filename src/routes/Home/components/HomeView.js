import React from 'react'
import UserList from '../containers/user-list'
import './HomeView.scss'

export const HomeView = () => (
  <div>
    <div className='wrap-users'>
      <h2>Username List</h2>
      <UserList />
      <hr />
      <h2>
        User Details:
      </h2>
    </div>
  </div>
)

export default HomeView
