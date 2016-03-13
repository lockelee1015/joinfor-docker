import React, {Component, PropTypes} from 'react'
import {Table, Tooltip} from 'antd'
import {Link} from 'react-router'
export default class ContainerTable extends Component {
  getColumns() {
    return [{
      title: '名称',
      dataIndex: 'Names',
      key: 'name',
      width: 120,
      render(text, record, index) {
        return <span><Link to={`/index/container/detail/id=${record.Id}`}>{text[0].substring(1)}</Link></span>
      }
    }, {
      title: '镜像',
      dataIndex: 'Image',
      key: 'Image',
      width: 120,
      render(text, record, index) {
        let lable = ''
        if (text.length > 18) {
          lable = `${text.substring(0, 15)}...`
          return (
            <Tooltip title={text}>
              <span>{lable}</span>
            </Tooltip>
          )
        } else {
          lable = text
          return <span>{lable}</span>
        }
      }
    }, {
      title: '端口映射',
      dataIndex: 'Ports',
      key: 'Ports',
      width: 200,
      render(text, record, index) {
        return (
          <div>
            {text.map((port) => {
              if (port.PublicPort) {
                return <span>{`${port.PublicPort}->${port.PrivatePort}/${port.Type} `}</span>
              } else {
                return <span>{`${port.PrivatePort}/${port.Type} `}</span>
              }
            })}
          </div>
        )
      }
    }, {
      title: '创建指令',
      dataIndex: 'Command',
      key: 'Command',
      width: 150
    }, {
      title: '状态',
      dataIndex: 'Status',
      key: 'Status',
      width: 150
    }]
  }

  render() {
    const rowSelection = {
      type: 'checkbox'
    }
    return (
      <Table columns={this.getColumns()}
             pagination={false}
             useFixedHeader
             dataSource={this.props.containerList}
             rowSelection={rowSelection}/>
    )
  }
}

ContainerTable.propTypes = {
  containerList: PropTypes.array,
  showContainer: PropTypes.func
}
