import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from 'redux'
import Header from 'components/shared/Header'
import Main from 'components/shared/Main'
import Footer from 'components/shared/Footer'
import Routes from 'routes'
import Reducer from 'reducers/index'

const App: FC = () =>  {
  const store = createStore(Reducer)

  return (
    <div className="container">
      <Provider store={store}>
        <Router>
          <Header />
          <Main>
            <Routes />
          </Main>
          <Footer />
        </Router>
      </Provider>
    </div>
  )
}

export default App