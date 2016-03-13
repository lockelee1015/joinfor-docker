/* @flow */
import React from 'react'
import {Input, Button} from 'antd'

export class HomeView extends React.Component {
  render () {
    return (
      <div className='login-container'>
        <h1>Joinfor Docker</h1>
        <Input placeholder='用户名'/>
        <Input placeholder='密码' type='password'/>
        <Button type='primary'>登录</Button>
      </div>
    )
  }
}

export default HomeView
