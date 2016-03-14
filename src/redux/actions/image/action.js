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
