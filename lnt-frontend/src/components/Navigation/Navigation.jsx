/* eslint-disable no-unused-vars */
import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navigation() {
  return (
    <div className="relative sticky top-0 z-[999]   bg-[#F7F9F9]">
      <nav>
        <div>
          <ul className="flex justify-between items-center h-22 rounded-none border-y-2 border-y-custom-blue">
            <div className=" bg-custom-blue ">
              <li className="flex items-center p-2 m-3 font-raleway font-sans">
                <Link to="/" className="flex items-center">
                  <img
                    src="https://www.lntecc.com/images/landt-logo.png"
                    className="mr-3 h-12"
                    alt="Logo"
                  />
                </Link>
              </li>
            </div>
            <div className="divide-xtext-xl flex gap-8 items-center p-3 text-custom-blue mr-5">
              <li className="relative  hover:text-custom-blue cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-custom-blue before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-custom-blue after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <NavLink to="/" className="">
                  <p className=" "> Home</p>
                </NavLink>
              </li>
              <div className="border-r-[1px] border-gray-500/50 h-[25px]"></div>
              <li className=" relative  hover:text-custom-blue cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-custom-blue before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-custom-blue after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <NavLink to="/project-1" className="">
                  <p className=" "> Productivity Analyzer</p>
                </NavLink>
              </li>
              <div className="border-r-[1px] border-gray-500/50 h-[25px]"></div>
              <li className=" relative  hover:text-custom-blue cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-custom-blue before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-custom-blue after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <NavLink to="/project-2" className="">
                  <p className=" "> Tweets Analyzer</p>
                </NavLink>
              </li>
              <div className="border-r-[1px] border-gray-500/50 h-[25px]"></div>
              <li className=" relative  hover:text-custom-blue cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-300 before:absolute before:bg-custom-blue before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-300 after:absolute after:bg-custom-blue after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                <NavLink to="/faq" className="">
                  <p className=" "> FAQ</p>
                </NavLink>
              </li>

              {/* <li className="flex items-center   font-raleway font-sans">
                <Link to="/" className="flex items-center">
                  <img src={LinkedInLogo} className="" alt="Logo" />
                </Link>
              </li>
              <li className="flex items-center  font-raleway font-sans">
                <Link to="/" className="flex items-center">
                  <img src={SearchBarLogo} className=" h-7 " alt="Logo" />
                </Link>
              </li> */}
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
}
