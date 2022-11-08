import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">General</Link>
          </li>
          <li>
            <Link to="LineChart">Line Chart</Link>
          </li>
          <li>
            <Link to="FunnelChart">Funnel Chart</Link>
          </li>
          <li>
            <Link to="WaterFallChart">WaterFall Chart</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
}

export default Layout
