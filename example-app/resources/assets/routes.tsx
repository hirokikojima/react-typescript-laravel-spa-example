import React, { FC } from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import HomePage from './containers/HomePage'
import ListPage from './containers/ListPage'

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomePage />
  },
  {
    path: '/list',
    main: () => <ListPage />
  }
]

const Routes: FC = () => {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route 
          key={index}
          path={route.path}
          exact={route.exact}
          children={<route.main />}
        />
      ))}
    </Switch>
  )
}

export default Routes