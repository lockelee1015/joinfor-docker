import React, {Component} from 'react'
import {Select, Input, Dropdown, Icon, Menu} from 'antd'
const {Option} = Select
const {Item} = Menu

export default class Toolbar extends Component {
  getOperationMenu() {
    return (
      <Menu>
        <Item>
          <a>启动</a>
        </Item>
        <Item>
          <a>停止</a>
        </Item>
        <Item>
          <a>重启</a>
        </Item>
        <Item>
          <a>暂停</a>
        </Item>
        <Item>
          <a>恢复</a>
        </Item>
        <Item>
          <a>删除</a>
        </Item>
      </Menu>
    )
  }

  render() {
    return (
      <div className='toolbar'>
        <Select defaultValue='all' style={{ width: 120 }}>
          <Option value='all'>全部</Option>
          <Option value='up'>运行中</Option>
          <Option value='stop'>停止</Option>
        </Select>
        <Input placeholder='过滤'/>
        <Dropdown overlay={this.getOperationMenu()}>
          <a className='ant-dropdown-link operation-dropdown'>
            操作 <Icon type='down'/>
          </a>
        </Dropdown>
      </div>
    )
  }
}
