import React, {Component, PropTypes} from 'react'
import {Table} from 'antd'
import {Link} from 'react-router'
export default class ContainerTable extends Component {
  getColumns() {
    return [{
      title: '名称',
      dataIndex: 'RepoTags',
      key: 'RepoTags',
      width: 120,
      render(text, record, index) {
        const name = text[0].substring(0, text[0].indexOf(':'))
        return <span>
          <Link to={`/image/detail/${name}`}>
            {name}
          </Link>
        </span>
      }
    }, {
      title: 'Tag',
      dataIndex: 'RepoTags',
      key: 'Tags',
      width: 100,
      render(text, record, index) {
        return <span>{text[0].substring(text[0].indexOf(':') + 1)}</span>
      }
    }, {
      title: '占用空间',
      dataIndex: 'VirtualSize',
      key: 'VirtualSize',
      width: 100,
      render(text, record, index) {
        return <span>{(text / 1024 / 1024).toFixed(2)}MB</span>
      }
    }, {
      title: '创建时间',
      dataIndex: 'Created',
      key: 'Created',
      width: 200,
      render(text, record, index) {
        return <span>{(text / (1000 * 60 * 60 * 24)).toFixed(0)}天</span>
      }
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
