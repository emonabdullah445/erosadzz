import React from "react";
import LeftText from "../LeftText/LeftText";
import Login from "../Login/Login";
import useMockLogin from "@/hooks/useMockLogin";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = ({ adminId, posterId }) => {
  const { login } = useMockLogin(adminId, posterId);
  return (
    <div className="flex min-h-screen w-full flex-col-reverse gap-10  md:flex-row md:items-center md:justify-center">
      <Navbar />
      <LeftText />
      <Login login={login} />
      <Footer />
    </div>
  );
};

export default Home;
