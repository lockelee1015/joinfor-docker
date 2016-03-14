import queryApi from '../../utils/queryApi'

export function queryContainerList() {
  return async function (dispatch) {
    const result = await queryApi('queryContainerList')
    dispatch({
      type: 'queryContainerList',
      containerList: result
    })
  }
}

export function changeFilterWord(text) {
  return {
    type: 'changeFilterWord',
    text
  }
}

export function changeVisibleType(visibleType) {
  return {
    type: 'changeVisibleType',
    visibleType
  }
}

export function containerSelectChange(selectedIdList) {
  return {
    type: 'containerSelectChange',
    selectedIdList
  }
}

export function doStart(id) {
  return async function (dispatch) {
    await queryApi('startContainer', {id})
    dispatch(queryContainerList())
  }
}

export function doStop(id) {
  return async function (dispatch) {
    await queryApi('stopContainer', {id})
    dispatch(queryContainerList())
  }
}

export function doRestart(id) {
  return async function (dispatch) {
    await queryApi('restartContainer', {id})
    dispatch(queryContainerList())
  }
}

export function doPause(id) {
  return async function (dispatch) {
    await queryApi('pauseContainer', {id})
    dispatch(queryContainerList())
  }
}

export function doUnpause(id) {
  return async function (dispatch) {
    await queryApi('unpauseContainer', {id})
    dispatch(queryContainerList())
  }
}

export function doRemove(id) {
  return async function (dispatch) {
    await queryApi('removeContainer', {id})
    dispatch(queryContainerList())
  }
}
