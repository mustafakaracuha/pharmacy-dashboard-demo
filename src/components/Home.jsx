import React from "react";

import Header from "./Header";
import List from "./List";
import Map from "./Map";
import Detail from "./Detail";

export default function Home() {
  return (
    <div className="w-full h-screen transition-all ease-in-out dark:bg-[#181A1B]">
      <Header/>
      <div className='w-full flex items-center justify-between transition-all dark:bg-[#181A1B]'>
        <div className="w-1/2 md:h-[650px]  2xl:h-[800px] justify-center items-center overflow-hidden border-slate-100 dark:border-slate-800 border-r pl-10 pr-5">
          <List />
        </div>
        <div className="w-1/2 md:h-[50%]  2xl:h-[800px] justify-center items-center ml-10 pr-6">
          <Map />
          <Detail />
        </div>
      </div>
    </div>
  );
}
