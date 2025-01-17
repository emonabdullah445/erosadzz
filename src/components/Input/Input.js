import React, { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const Input = ({
  type,
  id,
  name,
  showPassword, 
  setShowPassword,
  placeholder,
  register,
  validationSchema,
  errors,
}) => {


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className="relative w-full">
      <input
        type={inputType}
        id={id}
        placeholder={placeholder}
        className="peer w-full rounded-md border border-neutral-600 bg-white/90 px-3 py-1
           text-xs text-black placeholder-neutral-400 placeholder:text-xs focus:outline-none"
        {...register(name, validationSchema)}
      />
      <label
        htmlFor={id}
        className="absolute left-2 -translate-y-0 scale-100 text-sm text-yellow-600 
           transition-all opacity-0 peer-focus:opacity-100 peer-focus:translate-y-[-20px] peer-focus:scale-90"
      >
        {placeholder}
        <span className="text-red-500">*</span>
      </label>
      {type === "password" && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-2 top-1.5 cursor-pointer text-neutral-600 hover:text-neutral-800"
        >
          {showPassword ? (
            <IoMdEye
               className="h-5 w-5" />
          ) : (
            <IoMdEyeOff className="h-5 w-5" />
          )}
        </button>
      )}
      <p className="text-[10px] text-red-500">
        {errors[name] ? (
          <>{errors[name]?.message}</>
        ) : (
          <span className="opacity-0">message</span>
        )}
      </p>
    </div>
  );
};

export default Input;