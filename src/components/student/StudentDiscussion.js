import React from 'react'
import SideBar from './SideBar'

function StudentDiscussion() {
  return (
    <div>
      <div className='row'>
          <div className='col-md-2 main-sidebar'><SideBar /></div>
          <div className='col-md-10'>
                <h3>Student Discussion</h3>
          </div>
      </div>
    </div>
  )
}

export default StudentDiscussion