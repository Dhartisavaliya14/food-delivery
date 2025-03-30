import React from 'react'
import Nevbar from './components/Nevbar/Nevbar'
import Sidebar from './components/Sidebar/Sidebar'

const App = () => {
  return (
    <div>
      <Nevbar />
      <hr />
      <div className="app-content">
        <Sidebar />
      </div>
    </div>
  )
}

export default App
