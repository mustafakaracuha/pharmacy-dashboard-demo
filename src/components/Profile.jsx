import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { BsFillMoonStarsFill, BsMoon, BsFillSunFill } from "react-icons/bs";

import { toggleMode } from "../stores/features/pharm";

export default function Profile() {
  const { isDarkMode } = useSelector((state) => state.pharm);
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center">
        <div className="w-auto mr-4">
          <h2 className="text-m font-semibold dark:text-gray-400">
            Mustafa Karaçuha
          </h2>
          <p className="text-sm float-right text-gray-400 font-medium dark:text-gray-500">
            Admin
          </p>
        </div>
        <div className="mr-3 ml-1 w-14 h-14 flex font-semibold justify-center items-center rounded-full bg-sky-500 text-xl text-white uppercase hover:cursor-pointer">
          mk
        </div>
        <div
          className="w-[60px] h-[60px] bg-slate-200 dark:bg-slate-700 rounded-full active:scale-105 transition-all ease-in-out duration-200 items-center justify-center flex text-center mr-3 cursor-pointer"
          onClick={() => dispatch(toggleMode(!isDarkMode))}
        >
          <label className="toggleDarkBtn cursor-pointer">
            {isDarkMode ? (
              <BsFillMoonStarsFill
                size={25}
                className="text-orange-500"
                type="checkbox"
              />
            ) : (
              <BsFillSunFill
                size={30}
                className=" text-slate-400"
                type="checkbox"
              />
            )}
          </label>
        </div>
      </div>
    </>
  );
}
