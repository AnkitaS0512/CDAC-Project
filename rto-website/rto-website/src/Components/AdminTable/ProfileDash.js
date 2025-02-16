import React from 'react'
import AdminSidebar from '../AdminSidebar'
import Navbar from '../Navbar'
import RightSidebar from '../RightSidebar'

import Footer from '../Footer'
import ProfileTable from './profileTable'

const ProfileDash = () => {
  return (
    <div className="container-scroller">
    {/* Navbar */}
   <Navbar/>
  <div className="container-fluid page-body-wrapper">

     
      <RightSidebar/>
      <AdminSidebar/>
      <ProfileTable/>
  </div>
  <Footer/>
</div>
  )
}

export default ProfileDash