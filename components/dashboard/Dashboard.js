import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import {IoMdMenu} from "react-icons/io";
const Dashboard = ({ main }) => {

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const [numDropdown, setNumDropdown] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  return (
    <div>
      <div class="flex">
        <div
          className={`fixed lg:relative flex-col items-center inset-y-0 left-0 w-64 h-screen my-auto  mx-auto justify-center overflow-y-auto ease-in-out transition-all duration-300   z-[100] flex ${
            isDrawerOpen
              ? "translate-x-0 bg-[#f7f7f7]"
              : "-translate-x-full bg-white"
          }`}
        >
          <aside>
            <div className="pt-3.5 pl-6">
              {/* <Link
                href="/"
                className='text-[35px] font-sans text-center  font-black  cursor-pointer text-white"'
              >
                Link
                <span className="text-green">up</span>
              </Link> */}
            </div>{" "}
            <nav>
              <ul>
                <li className="flex gap-2 items-center py-4 text-[#73848C] hover:text-green">
                
                <button className="bg-[#000] w-full rounded-md text-white py-4 px-6">
                User Setting
             </button>
                </li>
                <li className="flex gap-2 items-center py-4 text-[#73848C] hover:text-green">
              
                <button className="bg-[#000] w-full rounded-md text-white py-4 px-6">
             Monthly Cost
             </button>
                </li>
                <li className="flex gap-2 items-center py-4 text-[#73848C] hover:text-green">
             <button className="bg-[#000] rounded-md w-full text-white py-4 px-6">
                Yearly Cost
             </button>
       
                </li>
                <li className="flex gap-x-2 items-center  py-4 text-[#73848C] hover:text-green">
                <button className="bg-[#000] w-full rounded-md text-white py-4 px-6">
         Projected Cost
             </button>
                </li>
               
              </ul>
            </nav>
          </aside>
        </div>
        <main class="flex-grow bg-[#F9FBFF] px-4  lg:px-14">
          <div className="flex justify-between">
   
            <button
              onClick={toggleDrawer}
              className="text-white pt-4 focus:outline-none absolute right-3 lg:hidden">
              <IoMdMenu className="h-[33px] mt-2 w-7 text-[#000]" />
            </button>
          </div>
          <div className="text-white z-[100] ">{main}</div>{" "}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
