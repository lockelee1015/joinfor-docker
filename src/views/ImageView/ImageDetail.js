import React, {Component, PropTypes} from 'react'
import {Table, Row, Col} from 'antd'
import {connect} from 'react-redux'
import {queryImageInfo} from '../../redux/actions/image/action'

class ImageDetail extends Component {
  componentWillMount() {
    const {name} = this.props.params
    const {dispatch} = this.props
    dispatch(queryImageInfo((name)))
  }

  getDataSource() {
    const {image} = this.props
    if (image === {}) return []
    let dataSource = []
    dataSource.push({name: 'Os', value: image.Os})
    dataSource.push({name: 'Architecture', value: image.Architecture})
    dataSource.push({name: 'User', value: image.ContainerConfig.User})
    const ports = image.ContainerConfig.ExposedPorts
    let i = 0
    for (let key in ports) {
      let name = ''
      if (i === 0) {
        name = 'Port'
      }
      dataSource.push({name, value: key})
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
                   showHeader={false}
                   pagination={false}
                   columns={this.getColumn()}
                   dataSource={this.getDataSource()}/>
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
