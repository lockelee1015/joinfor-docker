import React, {Component, PropTypes} from 'react'
import Nav from 'components/Nav'
export default class NavLayout extends Component {
  render() {
    const {history, location} = this.props
    return (
      <div className='main'>
        <nav>
          <Nav history={history} location={location}/>
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
  history: PropTypes.object,
  location: PropTypes.object
}
