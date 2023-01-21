import React, { useCallback, useEffect, useState } from "react";
import Cart from "../../../components/Dashboard/cart";
import Bradcrumbs from "../../../components/bradcrumbs";
import DashboardSidebar from "../../../components/Dashboard/sidebar";
import authRoute from "../../../hook/authRoute";

const Index: React.FC = (): JSX.Element => {
  return (
    <div>
      <Bradcrumbs name="Cart"></Bradcrumbs>
      <div className="grid grid-cols-1 md:grid-cols-4 container gap-4">
        {/* sidebar */}
        <div className="col-span-1 h-screen shadow-lg">
          <DashboardSidebar />
        </div>
        {/* main content */}
        <div className="col-span-3">
         <Cart
         ></Cart> 
        </div> 
      </div>
    </div>
  );
};

export default authRoute(Index);
