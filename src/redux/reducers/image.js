const initialState = {
  imageList: [],
  image: {}
}

function image(state = initialState, action) {
  switch (action.type) {
    case 'queryImageList':
      return queryImageList(state, action)
    case 'queryImageInfo':
      return queryImageInfo(state, action)
    default:
      return state
  }
}

function queryImageList(state, action) {
  return Object.assign({}, state, {imageList: action.imageList})
}

function queryImageInfo(state, action) {
  return Object.assign({}, state, {image: action.image})
}

export default image
