import React from "react";
import { useSelector } from "react-redux";

export default function Detail() {
  const { selectedPharm } = useSelector((state) => state.pharm);

  return (
    <>
      <div className="w-full h-[90px] flex items-center justify-between rounded-[20px] mt-2 dark:bg-transparent">
        <div className="w-72 flex items-center">
          <div className="w-20 h-20 flex items-center justify-center rounded-2xl dark:bg-transparent">
            <img src={selectedPharm.image} className="w-10 h-10" />
          </div>
          <div className="ml-2">
            <p className=" text-xl font-bold dark:text-gray-300">{selectedPharm.title}</p>
            <p className="text-gray-500 dark:text-gray-400">{selectedPharm.adress}</p>
          </div>
        </div>
        <ul className="list-inside">
          <li
            className={`${
              selectedPharm.isOpen
                ? "list-disc float-right text-sm text-green-500"
                : "list-disc float-right text-sm text-red-500"
            }`}
          >
            {selectedPharm.isOpen ? "Open" : "Close"}
          </li>
          <li className=" text-gray-500 dark:text-gray-400">{selectedPharm.time}</li>
        </ul>
      </div>

      <div className="w-full flex justify-around mt-14">
        <div className="w-40 h-32 mt-10 flex items-center justify-center">
          <img src={selectedPharm.medicines?.images} />
        </div>
        <table className="w-[500px] text-left h-16">
          <tr>
            <th className="text-gray-400 dark:text-gray-300 font-normal">Generic Name</th>
            <th className="text-gray-400 dark:text-gray-300 font-normal">Dosage Form</th>
            <th className="text-gray-400  dark:text-gray-300 font-normal">Dosage</th>
          </tr>
          <tr>
            <td className="text-black text-sm dark:text-gray-400">{selectedPharm.medicines?.names}</td>
            <td className="text-black text-sm dark:text-gray-400">{selectedPharm.medicines?.dosageForm}</td>
            <td className="text-black text-sm dark:text-gray-400">{selectedPharm.medicines?.dosage}</td>
          </tr>
        </table>
      </div>
    </>
  );
}
