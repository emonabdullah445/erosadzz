import LeftText from "@/components/LeftText/LeftText";
import Login from "@/components/Login/Login";
import React from "react";

const page = () => {
  return (
    <div className="flex min-h-screen w-full flex-col-reverse gap-10  md:flex-row md:items-center md:justify-center">
      <LeftText />
      <Login />
    </div>
  );
};

export default page;
