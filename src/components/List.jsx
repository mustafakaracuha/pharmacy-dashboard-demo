import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

// React Icons
import { BiSearch } from "react-icons/bi";
import { IoCloseCircle } from "react-icons/io5";
import { BsFillTelephoneFill, BsSortUpAlt, BsSortDown } from "react-icons/bs";

import {
  selectPharm,
  searchPharm,
  sortPharm,
  loadList,
} from "../stores/features/pharm";

export default function List() {
  const { pharmList, newList, selectedPharm } = useSelector(
    (state) => state.pharm
  );

  const [searchToggle, setSearchToggle] = useState(false);
  const [sort, setSort] = useState(false);
  const dispatch = useDispatch();
  const searchRef = useRef(null);

  useEffect(() => {
    dispatch(selectPharm(pharmList[0]));
    dispatch(loadList(pharmList));
  }, []);

  useEffect(() => {
    if (searchToggle) {
      searchRef.current.focus();
    }
  }, [searchToggle]);

  const handleSelectedPharm = (element) => {
    dispatch(selectPharm(element));
  };

  const handleSearchPharm = (value) => {
    dispatch(searchPharm(value));
  };

  const handleSortPharm = () => {
    setSort(!sort);
    dispatch(sortPharm());
  };

  return (
    <>
      {/* Menu Items */}
      <div className="w-full">
        <ul className="flex list-disc list-inside pt-14 font-semibold text-md cursor-pointer">
          <li className="text-sky-500 ">Pharmacies</li>
          <li className="ml-16 list-none transition duration-200 ease-in-out hover:text-sky-500 dark:hover:text-sky-600 dark:text-gray-400">
            Medicines
          </li>
        </ul>
      </div>
      {/* Bar Items */}
      <div className="w-full flex items-center justify-between mt-10">
        <p className="flex font-light items-center text-2xl dark:text-gray-300">
          <span className="text-2xl font-bold mr-2 dark:text-gray-300">
            {searchToggle ? newList.length : pharmList.length}
          </span>
          {searchToggle ? "Search result" : "Results"}
        </p>
        <div className="w-52 flex items-center justify-around text-sm font-medium">
          <BiSearch
            className={`${
              searchToggle
                ? "cursor-pointer text-black dark:text-gray-100"
                : "cursor-pointer text-gray-400 transition ease-in-out duration-200 dark:hover:text-gray-300"
            }`}
            size={20}
            onClick={() => setSearchToggle(!searchToggle)}
          />
          {sort ? (
            <BsSortUpAlt
              className={`${
                sort
                  ? "cursor-pointer  text-black dark:text-gray-100"
                  : "cursor-pointer  text-gray-400 transition ease-in-out duration-200 hover:text-black dark:hover:text-gray-300"
              }`}
              size={20}
              onClick={() => handleSortPharm()}
            />
          ) : (
            <BsSortDown
              className="cursor-pointer  text-black dark:text-gray-100 transition ease-in-out duration-200 dark:hover:text-gray-300"
              size={20}
              onClick={() => handleSortPharm()}
            />
          )}

          <p className="cursor-pointer text-gray-400 transition ease-in-out duration-200 hover:text-black dark:hover:text-gray-300">
            Open
          </p>
          <p className="cursor-pointer text-gray-400 transition ease-in-out duration-200 hover:text-black dark:hover:text-gray-300">
            Populer
          </p>
        </div>
      </div>
      {searchToggle && (
        <div className="w-full flex items-center relative">
          <span>
            <IoCloseCircle
              onClick={() => {
                setSearchToggle(!searchToggle);
                dispatch(loadList(pharmList));
              }}
              className="text-red-400 dark:text-red-500 absolute top-3 -left-2 cursor-pointer transition ease-in-out hover:text-red-500"
              size={26}
            />
          </span>
          <BiSearch
            className="text-gray-500 absolute right-5 top-11"
            size={26}
          />
          <input
            ref={searchRef}
            placeholder="Search Pharmacies"
            onChange={(e) => handleSearchPharm(e.target.value.toLowerCase())}
            className="w-full p-5 text-gray-500 bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:text-gray-400 placeholder:text-gray-400 rounded-[15px] mt-6 outline-none"
          />
        </div>
      )}
      {/* List Items */}
      <div className="h-2/3 mt-6 overflow-auto">
        {newList.map((element, index) => (
          <div
            className={`${
              selectedPharm.id === element.id
                ? "w-full p-4 flex items-center justify-between rounded-[20px] bg-[#CEECF9] dark:bg-sky-800 gap-x-6 transition duration-200 ease-in-out cursor-pointer pr-10"
                : "w-full p-4 group/call flex items-center justify-between rounded-[20px] dark:bg-transparent bg-white transition duration-200 ease-in-out dark:hover:bg-sky-800 hover:bg-[#CEECF9] cursor-pointer pr-10"
            }`}
            key={index}
            onClick={() => handleSelectedPharm(element)}
          >
            <div className="w-72 flex items-center">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-gray-800 ml-5 cursor-pointer">
                <img src={element.image} className="w-8 h-8" />
              </div>
              <div className="ml-5">
                <p className="text-md font-bold dark:text-gray-300">
                  {element.title}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  {element.adress}
                </p>
              </div>
            </div>
            <li
              className={`${
                element.isOpen
                  ? "list-disc float-right text-sm text-green-500"
                  : "list-disc float-right text-sm text-red-500"
              }`}
            >
              <span className="text-gray-500 text-md dark:text-gray-400">
                {element.time}
              </span>
            </li>
            <button
              onClick={() => window.open(`tel:${element.number}`)}
              className="w-20 h-12 bg-white dark:bg-gray-800 flex items-center justify-center text-sky-500 dark:text-sky-600 rounded-[15px]"
            >
              <BsFillTelephoneFill
                className="mr-2 dark:text-sky-600 text-[#008fff]"
                size={19}
              />
              <span
                className={`${
                  selectedPharm.id === element.id
                    ? "font-medium"
                    : "font-medium hidden"
                }`}
              >
                Call
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
