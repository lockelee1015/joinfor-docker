/* @flow */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ContainerTable from './ContainerTable'
import Toolbar from './Toolbar'
import {containerSelectChange, queryContainerList} from '../../redux/actions/container/action'

export class ContainerView extends Component {
  componentWillMount() {
    const {dispatch} = this.props
    dispatch(queryContainerList())
  }

  componentDidMount() {
    const {dispatch} = this.props
    setInterval(() => dispatch(queryContainerList()), 1000)
  }

  render() {
    const {dispatch, containerList, selectedContainerIdList} = this.props
    return (
      <div className='view-container'>
        <Toolbar dispatch={dispatch} selectedContainerIdList={selectedContainerIdList}/>
        <ContainerTable containerList={containerList}
                        onRowSelectionChange={(container) => dispatch(containerSelectChange(container))}/>
      </div>
    )
  }
}

ContainerView.propTypes = {
  containerList: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func,
  selectedContainerIdList: PropTypes.array
}

function select(state) {
  const {containerList, filterWord, visibleType, selectedContainerIdList} = state.container
  const filteredList = []
  console.log(containerList)
  containerList.map((container) => {
    if (container.Names[0].indexOf(filterWord) > -1) {
      const isActive = container.Status.indexOf('U') === 0
      switch (visibleType) {
        case 'all':
          filteredList.push(Object.assign({}, container, {isActive}))
          break
        case 'up':
          if (isActive)filteredList.push(Object.assign({}, container, {isActive}))
          break
        case 'stop':
          if (!isActive)filteredList.push(Object.assign({}, container, {isActive}))
          break
        default :
          filteredList.push(Object.assign({}, container, {isActive}))
          break
      }
    }
  })
  return {containerList: filteredList, selectedContainerIdList}
}

export default connect(select)(ContainerView)
