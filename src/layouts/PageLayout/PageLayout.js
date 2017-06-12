import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/Header'
import BranchSelect from '../../components/BranchSelect'
import './PageLayout.scss'

class PageLayout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      branchState: '1'
    }
    this.changeBranch = this.changeBranch.bind(this)
  }
  changeBranch = (event) => {
    this.setState({
      branchState: event.target.value
    })
  }
  render () {
    return (
      <div className='wrap-app'>
        <Header />
        <div className='container text-center'>
          <div className='page-layout__viewport'>
            <BranchSelect changeBranch={this.changeBranch} value={this.state.branchState} />
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}
PageLayout.propTypes = {
  children: PropTypes.node
}

export default PageLayout
