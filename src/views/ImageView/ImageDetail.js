import React, {Component, PropTypes} from 'react'

export default class ContainerDetail extends Component {
  render() {
    return (
      <div>
        type here{this.props.params.id}
      </div>
    )
  }
}

ContainerDetail.propTypes = {
  params: PropTypes.object
}
