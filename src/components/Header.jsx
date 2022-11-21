import Search from "./Search";
import Profile from "./Profile";


export default function Header() {

  return (
    <>
      <div className="w-full h-20 flex items-center justify-between pl-10 pt-3 bg-white dark:bg-[#181A1B]">
        <div>
          <h1 className="text-3xl float-left font-extrabold text-sky-500 cursor-pointer">
            pharma
          </h1>
          <Search />
        </div>
        <Profile />
      </div>
    </>
  );
}
