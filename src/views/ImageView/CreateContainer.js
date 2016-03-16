import React, {Component, PropTypes} from 'react'
import {Form, Input, Button} from 'antd'
const FormItem = Form.Item

class CreateContainer extends Component {
  getPortsInput() {
    const {getFieldProps} = this.props.form
    if (!this.props.image) {
      return null
    }
    const {ExposedPorts} = this.props.image ? this.props.image.Config : {ExposedPorts: null}
    if (!ExposedPorts) {
      return null
    }
    let portList = []
    for (let key in ExposedPorts) {
      portList.push(key.substring(0, key.indexOf('/')))
    }
    return portList.map((port) => {
      return <Input addonAfter={`:${port}`} {...getFieldProps(`PORT${port}`)}/>
    })
  }

  onCreate() {
    const {getFieldsValue} = this.props.form
    const values = getFieldsValue()
    let portList = []
    for (let key in values) {
      if (key.indexOf('PORT') === 0) {
        let port = {}
        port['in'] = key.substring(4)
        port['out'] = values[key]
        portList.push(port)
      }
    }
    values.portList = portList
    console.log(values)
    this.props.onCreate(values)
  }

  render() {
    const {getFieldProps} = this.props.form
    const {image} = this.props
    return <div style={{paddingLeft: '10px'}}>
      <Form form={this.props.form}>
        <FormItem label='名称:'>
          <Input {...getFieldProps('name')}/>
        </FormItem>
        <FormItem label='端口映射:'>
          <Input.Group>
            {this.getPortsInput()}
          </Input.Group>
        </FormItem>
        <FormItem label='Cmd:'>
          <Input {...getFieldProps('cmd')} placeholder={image.ContainerConfig.Cmd[0]}/>
        </FormItem>
        <FormItem label='Env:'>
          <Input {...getFieldProps('env')}/>
        </FormItem>
      </Form>
      <Button type='primary' onClick={() => this.onCreate()}>创建容器</Button>
    </div>
  }
}

CreateContainer.propTypes = {
  image: PropTypes.object,
  form: PropTypes.object,
  onCreate: PropTypes.func
}

export default Form.create()(CreateContainer)
