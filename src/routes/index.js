import React from 'react'
import { Route, IndexRoute } from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import NavLayout from 'layouts/NavLayout/NavLayout'
import LoginView from 'views/LoginView/LoginView'
import ContainerView from 'views/ContainerView/ContainerView'
import DashboardView from 'views/DashboardView/DashboardView'
import ImageView from 'views/ImageView/ImageView'
import ConfigView from 'views/ConfigView/ConfigView'
import ContainerDetail from 'views/ContainerView/ContainerDetail'
import ImageDetail from 'views/ImageView/ImageDetail'

export default (store) => {
  return (
    <Route path='/' component={CoreLayout}>
      <IndexRoute component={LoginView}/>
      <Route path='/' component={NavLayout}>
        <Route path='dashboard' component={DashboardView}/>
        <Route path='container'>
          <IndexRoute component={ContainerView}/>
          <Route path='detail/:id' component={ContainerDetail}/>
        </Route>
        <Route path='Image'>
          <IndexRoute component={ImageView}/>
          <Route path='detail/:name' component={ImageDetail}/>
        </Route>
        <Route path='config' component={ConfigView}/>
      </Route>
    </Route>
  )
}
