import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setBranch } from '../../store/reducers/branchReducer'

export class BranchSelect extends React.Component {
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
  componentDidMount () {
    // console.log(this.props)
  }

  render () {
    return (
      <form className='form-horizontal'>
        <fieldset>
          <div className='form-group'>
            <label htmlFor='select' className='col-lg-2 control-label'>Selects</label>
            <div className='col-lg-10'>
              <select
                className='form-control'
                id='select'
                value={this.props.branchValue}
                onChange={this.props.setBranch}
              >
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
  setBranch: PropTypes.any,
  branchValue: PropTypes.any
}

const mapDispatchToProps = (dispatch) => {
  // increment : () => increment(1),
  return {
    setBranch : (event) => dispatch(setBranch(event.target.value)),
    dispatch
  }
}

const mapStateToProps = (state) => ({
  // counter : state.counter,
  branchValue : state.value
})

export default connect(mapStateToProps, mapDispatchToProps)(BranchSelect)
