const initialState = {
  containerList: [],
  filterWord: '',
  visibleType: 'all',
  selectedContainerIdList: []
}

function container(state = initialState, action) {
  switch (action.type) {
    case 'queryContainerList':
      return queryContainerList(state, action)
    case 'changeFilterWord':
      return changeFilterWord(state, action)
    case 'changeVisibleType':
      return changeVisibleType(state, action)
    case 'containerSelectChange':
      return containerSelectChange(state, action)
    default:
      return state
  }
}

function queryContainerList(state, action) {
  return Object.assign({}, state, {containerList: action.containerList})
}

function changeFilterWord(state, action) {
  return Object.assign({}, state, {filterWord: action.text})
}

function changeVisibleType(state, action) {
  return Object.assign({}, state, {visibleType: action.visibleType})
}

function containerSelectChange(state, action) {
  return Object.assign({}, state, {selectedContainerIdList: action.selectedIdList})
}

export default container
