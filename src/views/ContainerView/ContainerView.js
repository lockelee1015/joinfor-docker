/* @flow */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ContainerTable from './ContainerTable'
import Toolbar from './Toolbar'

export class ContainerView extends Component {
  render() {
    return (
      <div className='view-container'>
        <Toolbar/>
        <ContainerTable containerList={this.props.containerList}/>
      </div>
    )
  }
}

ContainerView.propTypes = {
  containerList: PropTypes.array,
  history: PropTypes.object
}

function select(state) {
  return {containerList: state.container.containerList}
}

export default connect(select)(ContainerView)
