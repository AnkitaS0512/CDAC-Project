import React from 'react'
import Navbar from '../Navbar'
import RightSidebar from '../RightSidebar'
import Sidebar from '../Sidebar'
import Footer from '../Footer'
import PaymentsForm from './PaymentsForm '


const Payments = () => {
  return (
    <div className="container-scroller">
        {/* Navbar */}
       <Navbar/>
      <div className="container-fluid page-body-wrapper">
          <RightSidebar/>
          <Sidebar/>
          <div className='main-panel'>
            <div className='content-wrapper"'>
                <PaymentsForm/>
            </div>
        
    </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default Payments