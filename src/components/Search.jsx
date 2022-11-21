import React from "react";
import { BiSearch } from 'react-icons/bi';


export default function search() {

  return (
    <div className="w-80 h-9 flex items-center ml-52">
      <BiSearch size={25} className="dark:text-gray-400"/>
      <input
        className="w-full pl-5 border-none bg-transparent outline-none placeholder-gray-300 dark:text-gray-400 dark:placeholder-gray-500 font-medium"
        placeholder="Search by medication"
      />
    </div>
  );
}
