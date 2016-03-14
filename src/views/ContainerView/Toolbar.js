import React, {Component, PropTypes} from 'react'
import {Select, Input, Button} from 'antd'
import {
  changeFilterWord,
  changeVisibleType,
  doStart,
  doStop,
  doRestart,
  doPause,
  doUnpause,
  doRemove} from '../../redux/actions/container/action'
const {Option} = Select

export default class Toolbar extends Component {
  doAction(action) {
    console.log('hehe')
    const {dispatch, selectedContainerIdList} = this.props
    switch (action) {
      case 'start':
        selectedContainerIdList.map((id) => dispatch(doStart(id)))
        break
      case 'stop':
        selectedContainerIdList.map((id) => dispatch(doStop(id)))
        break
      case 'restart':
        selectedContainerIdList.map((id) => dispatch(doRestart(id)))
        break
      case 'pause':
        selectedContainerIdList.map((id) => dispatch(doPause(id)))
        break
      case 'unpause':
        selectedContainerIdList.map((id) => dispatch(doUnpause(id)))
        break
      case 'remove':
        selectedContainerIdList.map((id) => dispatch(doRemove(id)))
        break
      default:
        break
    }
  }

  render() {
    const {dispatch} = this.props
    return (
      <div className='toolbar'>
        <Select defaultValue='all' style={{ width: 120 }} onSelect={(value) => dispatch(changeVisibleType(value))}>
          <Option value='all'>全部</Option>
          <Option value='up'>运行中</Option>
          <Option value='stop'>停止</Option>
        </Select>
        <Input placeholder='过滤' onChange={(e) => dispatch(changeFilterWord(e.target.value))}/>
        <div className='btn-group'>
          <Button onClick={() => this.doAction('start')}>启动</Button>
          <Button onClick={() => this.doAction('stop')}>停止</Button>
          <Button onClick={() => this.doAction('restart')}>重启</Button>
          <Button onClick={() => this.doAction('pause')}>暂停</Button>
          <Button onClick={() => this.doAction('unpause')}>恢复</Button>
          <Button onClick={() => this.doAction('remove')}>删除</Button>
        </div>
      </div>
    )
  }
}

Toolbar.propTypes = {
  dispatch: PropTypes.func,
  selectedContainerIdList: PropTypes.array
}
