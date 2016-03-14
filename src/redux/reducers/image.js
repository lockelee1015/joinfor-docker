const initialState = {
  imageList: []
}

function image(state = initialState, action) {
  switch (action.type) {
    case 'queryImageList':
      return queryImageList(state, action)
    default:
      return state
  }
}

function queryImageList(state, action) {
  return Object.assign({}, state, {imageList: action.imageList})
}

export default image
