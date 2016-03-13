/**
 * Created by Lee on 3/13/16.
 */
import React, {Component, PropTypes} from 'react'
import {Menu} from 'antd'
const {Item} = Menu

export default class Nav extends Component {
  handlerClick(item) {
    this.props.history.push(`/index/${item.key}`)
  }

  render() {
    return (
      <Menu onClick={(item) => this.handlerClick(item)}>
        <Item key='dashboard'>Dashboard</Item>
        <Item key='container'>容器</Item>
        <Item key='image'>镜像</Item>
        <Item key='config'>配置</Item>
      </Menu>
    )
  }
}

Nav.propTypes = {
  history: PropTypes.func
}
