import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import container from './reducers/container'
import image from './reducers/image'
export default combineReducers({
  router, container, image
})
