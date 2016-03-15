import queryApi from '../../utils/queryApi'

export function queryImageList() {
  return async function (dispatch) {
    const result = await queryApi('queryImageList')
    dispatch({
      type: 'queryImageList',
      imageList: result
    })
  }
}

export function queryImageInfo(name) {
  return async function (dispatch) {
    const result = await queryApi('queryImageInfo', {name})
    dispatch({
      type: 'queryImageInfo',
      image: result
    })
  }
}
