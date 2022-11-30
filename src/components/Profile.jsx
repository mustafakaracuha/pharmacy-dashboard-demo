import React,{useState,useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";

import { BsFillMoonFill,BsMoon, BsFillSunFill } from "react-icons/bs";

import { toggleMode} from "../stores/features/pharm";

export default function Profile() {
  const { isDarkMode } = useSelector((state) => state.pharm);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center">
      <label class="toggleDarkBtn">
         {
         isDarkMode ?
        <BsFillMoonFill size={25} className="text-orange-500 cursor-pointer transition duration-300 ease-in-out hover:text-orange-600" type="checkbox" onClick={() => dispatch(toggleMode(!isDarkMode))} /> :
        <BsFillSunFill size={30}  className="text-gray-400 cursor-pointer transition-all duration-300 ease-in-out hover:text-gray-500 "  type="checkbox" onClick={() => dispatch(toggleMode(!isDarkMode))} />
         }
      </label>
        <div className="w-auto mr-4">
          <h2 className="text-m font-semibold dark:text-gray-400">Mustafa Karaçuha</h2>
          <p className="text-sm float-ri  ght text-gray-400 font-medium dark:text-gray-500">Admin</p>
        </div>
        <div className="mr-8 ml-1 w-14 h-14 flex font-semibold justify-center items-center rounded-full bg-sky-500 text-xl text-white uppercase hover:cursor-pointer">mk</div>
      </div>
    </>
  );
}
