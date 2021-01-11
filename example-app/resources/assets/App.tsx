import React, { FC } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/shared/Header'
import Main from 'components/shared/Main'
import Footer from 'components/shared/Footer'
import Routes from 'routes'

const App: FC = () =>  (
  <div className="container">
    <Router>
      <Header />
      <Main>
        <Routes />
      </Main>
      <Footer />
    </Router>
  </div>
)

export default App