import React from 'react'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

const App: React.FC = () => {
  return (
    <div className="flex h-screen">
      <Sidebar/>
      <div className='pl-52 flex-1'>
      <Dashboard/>
      </div>
    </div>
  )
}

export default App