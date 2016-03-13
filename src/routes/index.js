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

export default (store) => (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={LoginView} />
    <Route path='index' component={NavLayout}>
      <IndexRoute component={DashboardView} />
      <Route path='dashboard' component={DashboardView}/>
      <Route path='container' component={ContainerView}/>
      <Route path='container/detail/:id' component={ContainerDetail}/>
      <Route path='Image' component={ImageView}/>
      <Route path='config' component={ConfigView}/>
    </Route>
  </Route>
)
