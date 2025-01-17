import React from "react";

const ForgetPassword = () => {
  return (
    <div className="flex items-center justify-between text-[12px]">
      <label
        className="relative flex cursor-pointer items-center rounded-full"
        htmlFor="remember"
        
      >
        <input
          type="checkbox"
          className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded border-2 border-white 
          transition-all checked:border-white-500 checked:bg-yellow-500  "
          id="remember"
        />
        <div className="pointer-events-none text-black absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4  opacity-0 transition-opacity peer-checked:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3 w-3"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
          
        </div>
        <p className="absolute top-2 left-5 -translate-y-2/4 text-white w-[100px]">
            Remember me
          </p>
      </label>
    

      <a href="#" className=" text-yellow-500 hover:text-yellow-400">
        Forgot password?
      </a>
    </div>
  );
};

export default ForgetPassword;
