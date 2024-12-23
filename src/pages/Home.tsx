import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store";
import Header from "../components/layout/Header";

const Home: React.FC = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token, navigate]);

  if (!token) {
    return null;
  }

  return (
    <>
      <Header />
    </>
  );
};

export default Home;
