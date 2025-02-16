import React from 'react'
import PaymentTable from './PaymentTable'
import Navbar from '../Navbar'
import AdminSidebar from '../AdminSidebar'
import RightSidebar from '../RightSidebar'
import Footer from '../Footer'


const PayTable = () => {
  return (
    <div className="container-scroller">
    {/* Navbar */}
   <Navbar/>
  <div className="container-fluid page-body-wrapper">

     
      <RightSidebar/>
      <AdminSidebar/>
      <PaymentTable/>
  </div>
  <Footer/>
</div>
  )
}

export default PayTable;