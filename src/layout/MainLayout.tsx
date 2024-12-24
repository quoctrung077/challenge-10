import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import Header from "../components/layout/Header.tsx";
import SidebarPlaylist from "../components/layout/SidebarPlaylist.tsx";

const MainLayout: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }
  return (
    <div className="main__layout">
      <Header />
      <div className="main__layout-content">
        <SidebarPlaylist />
        <main className="main__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
