/* @flow */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import ImageTable from './ImageTable'
import Toolbar from './Toolbar'
import {queryImageList} from '../../redux/actions/image/action'

export class ImageView extends Component {
  componentDidMount() {
    const {dispatch} = this.props
    setInterval(() => dispatch(queryImageList()), 1000)
  }

  render() {
    return (
      <div className='view-container'>
        <Toolbar/>
        <ImageTable containerList={this.props.imageList}/>
      </div>
    )
  }
}

ImageView.propTypes = {
  imageList: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func
}

function select(state) {
  return {imageList: state.image.imageList}
}

export default connect(select)(ImageView)
