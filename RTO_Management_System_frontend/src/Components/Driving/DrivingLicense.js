import React from 'react'
import Navbar from '../Navbar';
import RightSidebar from '../RightSidebar';
import Sidebar from '../Sidebar';
import Footer from '../Footer';
import DrivingForm from './drivingForm';

const DrivingLicense = () => {
  return (
    <div className="container-scroller">
        {/* Navbar */}
       <Navbar/>
      <div className="container-fluid page-body-wrapper">

     
          <RightSidebar/>
          <Sidebar/>
          <div className='main-panel'>
            <div className='content-wrapper"'>
                <DrivingForm/>
            </div>
        
    </div>
      </div>
      <Footer/>
    </div>
    
  )
}

export default DrivingLicense;