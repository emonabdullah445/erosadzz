import React from "react";
import LeftText from "../LeftText/LeftText";
import Login from "../Login/Login";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = ({ adminId, posterId }) => {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen w-full flex-col-reverse gap-10  md:flex-row md:items-center md:justify-center">
        <LeftText />
        <Login adminId={adminId} posterId={posterId} />
      </div>
      <Footer />
    </>
  );
};

export default Home;
