import React from "react";

const Button = ({ type, name, text, errors }) => {
  console.log(errors);

  return (
    <button
      type={type}
      className={`w-full py-1 text-[14px] font-semibold px-4 border-2 ${
        name === "login"
          ? "border-yellow-600 text-yellow-600 hover:bg-yellow-500 hover:text-black"
          : "border-neutral-600 text-gray-400 hover:text-black hover:bg-neutral-400"
      }  rounded-md 
           transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed`}
      disabled={errors}
    >
      {text}
    </button>
  );
};

export default Button;
