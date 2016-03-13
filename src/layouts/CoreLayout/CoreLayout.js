import React, { PropTypes } from 'react'
import '../../styles/core.scss'
import 'antd/lib/index.css'

export class CoreLayout extends React.Component {
  static propTypes = {
    children: PropTypes.element
  }

  render () {
    return (
      <div className='container'>
        <header>
          <h1>Joinfor Docker</h1>
        </header>
        {this.props.children}
      </div>
    )
  }
}

export default CoreLayout
