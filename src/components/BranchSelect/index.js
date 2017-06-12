import React from 'react'
import PropTypes from 'prop-types'

export default class BranchSelect extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '1'
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({ value: event.target.value })
  }

  render () {
    return (
      <form className='form-horizontal'>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='select' className='col-lg-2 control-label'>Selects</label>
            <div className='col-lg-10'>
              <select className='form-control' id='select' value={this.props.branchState} onChange={this.props.changeBranch}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
              <br />
            </div>
          </div>
        </fieldset>
      </form>
    )
  }
}

BranchSelect.propTypes = {
  changeBranch: PropTypes.any,
  branchState: PropTypes.any
}
