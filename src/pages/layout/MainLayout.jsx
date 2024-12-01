import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  // restrict user visit the home page before login
  useEffect(() => {
    if (!Cookies.get("accessToken")) {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <main>
        <section className="container">
          <div className="flex gap-x-2">
            {isOpen && (
              <div>
                <Sidebar />
              </div>
            )}
            <div className="w-full">
              <Navbar setIsOpen={setIsOpen} isOpen={isOpen} />
              <Outlet />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainLayout;
