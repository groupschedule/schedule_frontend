import React from 'react'
import SideBar from './SideBar'

function TMHome() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                TM HomePage
          </div>
        </div>
    </div>
  )
}

export default TMHome
