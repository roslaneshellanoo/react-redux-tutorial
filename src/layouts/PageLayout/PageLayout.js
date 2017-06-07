import React from 'react'
import { IndexLink, Link } from 'react-router'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='wrap-app'>
    <Header />
    <div className='container text-center'>
      <h1>JS APP</h1>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
      {' · '}
      <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
      <div className='page-layout__viewport'>
        {children}
      </div>
    </div>
  </div>

)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
