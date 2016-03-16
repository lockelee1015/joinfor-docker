import React, {Component, PropTypes} from 'react'
import {Table, Row, Col} from 'antd'
import {connect} from 'react-redux'
import {queryImageInfo, createContainerFromImage} from '../../redux/actions/image/action'
import CreateContainer from './CreateContainer'

class ImageDetail extends Component {
  componentWillMount() {
    const {name} = this.props.params
    const {dispatch} = this.props
    dispatch(queryImageInfo((name)))
  }

  onCreate(values) {
    const {name} = this.props.params
    const {dispatch, image} = this.props
    let container = {}
    container['Cmd'] = []
    if (values.cmd) {
      container['Cmd'].push(values.cmd)
    } else {
      container['Cmd'] = image.Config.Cmd
    }
    container['Image'] = name
    container['ExposedPort'] = {}
    container['HostConfig'] = {}
    container['HostConfig']['PortBindings'] = {}
    values.portList.map((port) => {
      if (port.out) {
        container['ExposedPort'][`${port.in}/tcp`] = {}
        container['HostConfig']['PortBindings'][`${port.in}/tcp`] = [{'HostPort': port.out}]
      }
    })
    container['Name'] = values.name
    dispatch(createContainerFromImage((container)))
  }

  getDataSource() {
    const {image} = this.props
    if (!image.Config) {
      return []
    }
    let dataSource = []
    dataSource.push({name: 'Os', value: image.Os})
    dataSource.push({name: 'Architecture', value: image.Architecture})
    const ports = image.Config ? image.Config.ExposedPorts : []
    let i = 0
    for (let key in ports) {
      let name = ''
      if (i === 0) {
        name = 'Port'
      }
      dataSource.push({name, value: key})
      i++
    }

    const cmd = image.Config.Cmd

    for (let k = 0; k < cmd.length; k++) {
      let name = ''
      if (k === 0) {
        name = 'Cmd'
      }
      dataSource.push({name, value: cmd[k]})
    }

    const env = image.Config.Env
    for (let j = 0; j < env.length; j++) {
      let name = ''
      if (j === 0) {
        name = 'Evn'
      }
      dataSource.push({name, value: env[j]})
    }
    return dataSource
  }

  getColumn() {
    const columns = [{
      title: 'name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'value',
      dataIndex: 'value',
      key: 'value'
    }]
    return columns
  }

  render() {
    const {name} = this.props.params
    return (
      <div className='view-container'>
        <h1>Image: {name}</h1>
        <Row>
          <Col span='12'>
            <Table usefixedHeader
                   bordered
                   showHeader={false}
                   pagination={false}
                   columns={this.getColumn()}
                   dataSource={this.getDataSource()}/>
          </Col>
          <Col span='12'>
            <CreateContainer image={this.props.image} onCreate={this.onCreate.bind(this)}/>
          </Col>
        </Row>
      </div>
    )
  }
}

ImageDetail.propTypes = {
  params: PropTypes.object,
  dispatch: PropTypes.func,
  image: PropTypes.object
}

function select(state) {
  return state.image
}

export default connect(select)(ImageDetail)
