import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  return (
    <>
      <main>
        <section className="container">
          <div className="flex gap-x-2">
            <div>
              <Sidebar />
            </div>
            <div className="w-full">
              <Navbar />
              <Outlet />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
