import React from 'react'
import { IndexLink, Link } from 'react-router'
import { browserHistory } from 'react-router'

export default class Header extends React.Component {
  goHome (event) {
    event.preventDefault()
    browserHistory.push('/')
  }
  render () {
    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle collapsed'
              data-toggle='collapse'
              data-target='#bs-example-navbar-collapse-1'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar' />
              <span className='icon-bar' />
              <span className='icon-bar' />
            </button>
            <a className='navbar-brand' href='#'>Brand</a>
          </div>

          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li>
                <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home</IndexLink>
              </li>
              <li>
                <Link to='/users' activeClassName='page-layout__nav-item--active'>Users</Link>
              </li>
              <li>
                <Link to='/counter' activeClassName='page-layout__nav-item--active'>Counter</Link>
              </li>
              <li>
                <Link to='/login' activeClassName='page-layout__nav-item--active'>Login</Link>
              </li>
            </ul>
            <form className='navbar-form navbar-left' role='search'>
              <div className='form-group'>
                <input type='text' className='form-control' placeholder='Search' />
              </div>
              <button onClick={this.goHome} type='submit' className='btn btn-default'>Submit</button>
            </form>
            <ul className='nav navbar-nav navbar-right'>
              <li><a href='#'>Link</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
