import React from "react";
import LeftText from "../LeftText/LeftText";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useMockLogin from "@/hooks/useMockLogin.js";

const Home = ({ adminId, posterId }) => {
  const { login } = useMockLogin(adminId, posterId);
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full flex-col-reverse gap-10  md:flex-row md:items-center md:justify-center">
        <LeftText />
        <Login login={login} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
