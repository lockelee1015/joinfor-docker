import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import container from './reducers/container'

export default combineReducers({
  router, container
})
