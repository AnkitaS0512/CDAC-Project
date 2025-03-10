import React from "react";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
import Footer from "../Footer";

import Dashboardpage from "../Dashboardpage";
import AdminSidebar from "../AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="container-scroller">
        {/* Navbar */}
       <Navbar/>
      <div className="container-fluid page-body-wrapper">

         
          <RightSidebar/>
          <AdminSidebar/>
          <Dashboardpage/>
      </div>
      <Footer/>
    </div>
  );
};

export default AdminDashboard;
