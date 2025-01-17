"use client";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineSupportAgent } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);
  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened((navIsOpened) => !navIsOpened);
  };
  return (
    <>
      <div
        aria-hidden={true}
        onClick={() => {
          closeNavbar();
        }}
        className={`fixed inset-0 z-30 ${
          navIsOpened ? "md:hidden" : "hidden md:hidden"
        }`}
      />
      <header className="w-full flex items-center h-[60px] z-40 bg-black  backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto md:max-w-[1200px] w-full flex gap-x-5 justify-between items-center">
          <div className="flex items-center md:hidden">
            <button
              onClick={() => {
                toggleNavbar();
              }}
              aria-label="toggle navbar"
              className="outline-none pl-3 relative py-3"
            >
              <span
                aria-hidden={true}
                className={`
              flex h-0.5 w-6 rounded bg-white transition duration-300
              ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}
            `}
              ></span>
              <span
                aria-hidden={true}
                className={`
              mt-2 flex h-0.5 w-6 rounded bg-white transition duration-300
              ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}
              `}
              />
            </button>
          </div>
          <div className="flex justify-center md:justify-start items-center w-full md:min-w-max">
            <Link href="/" className="relative flex items-center gap-2.5">
              <span className="inline-flex text-[22px] text-white">
                <span className="text-[#EEBD22]">EROS</span>ADS
              </span>
            </Link>
          </div>
          <div
            className={`
          absolute top-full left-0 bg-black h-screen md:bg-transparent py-8 md:py-0 px-5 sm:px-10  md:px-0 md:border-none w-full md:top-0 md:relative md:w-max md:flex md:transition-none duration-300 ease-linear gap-x-6
          ${
            navIsOpened
              ? "visible opacity-100 translate-y-0"
              : "translate-y-10 opacity-0 invisible md:visible md:translate-y-0 md:opacity-100"
          }
          `}
          >
            <ul className="flex flex-col md:flex-row md:items-center md:w-full md:justify-center gap-x-8 gap-y-5 md:gap-y-0">
              <li>
                <Link
                  href="/contact"
                  className="relative flex items-center whitespace-nowrap  text-[#fff] md:text-[#9b9b9b] text-base md:text-sm md:py-2.5 duration-300 ease-linear "
                >
                  <span className="md:hidden mr-4">
                    <MdOutlineSupportAgent size={22} />
                  </span>
                  Contact & Support
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="relative flex items-center text-[#fff] md:text-[#9b9b9b] text-base md:text-sm md:py-2.5 duration-300 ease-linear "
                >
                  <span className="md:hidden mr-4">
                    <AiFillDollarCircle size={22} />
                  </span>
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="relative  flex items-center text-[#fff] md:text-[#9b9b9b] text-base md:text-sm md:py-2.5 duration-300 ease-linear "
                >
                  <span className="md:hidden mr-4">
                    <BsFillQuestionCircleFill size={20} />
                  </span>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
