import React, {Component, PropTypes} from 'react'
import Nav from 'components/Nav'
export default class NavLayout extends Component {
  render () {
    const {history} = this.props
    return (
      <div className='main'>
        <nav>
          <Nav history={history}/>
        </nav>
        <section>
          {this.props.children}
        </section>
      </div>
    )
  }
}

NavLayout.propTypes = {
  children: PropTypes.element,
  history: PropTypes.object
}
