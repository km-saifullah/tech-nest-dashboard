import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Cookies from "js-cookie";
import { useGetProfileQuery } from "../../redux/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../../redux/authSlice";

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authSlice);
  const { data, isLoading } = useGetProfileQuery(auth.id);

  useEffect(() => {
    if (!Cookies.get("accessToken")) {
      navigate("/login");
    }

    if (!isLoading && data) {
      dispatch(setAuth(data.data));
    }
  }, [data, isLoading]);
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
