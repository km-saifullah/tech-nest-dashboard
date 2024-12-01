import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useGetUserByIdQuery } from "../../redux/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/authSlice";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const userId = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  const { data, isLoading } = useGetUserByIdQuery(userId.id);

  // restrict user visit the home page before login
  useEffect(() => {
    if (!Cookies.get("accessToken")) {
      navigate("/login");
    }
    if (!isLoading && data) {
      dispatch(setAuth(data.data));
    }
  }, [data]);
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
