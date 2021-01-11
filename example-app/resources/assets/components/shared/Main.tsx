import React, { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Main: FC<Props> = ({children}) => (
  <div className="container">
    <div className="row">
      <nav className="col-md-2 sidebar">
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/list">List</Link>
          </li>
        </ul>
      </nav>

      <main className="col-md-10 main">
        {children}
      </main>
    </div>
  </div>
)

export default Main