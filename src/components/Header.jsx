import { useEffect, useState } from "react"
import MoonIcon from "./icons/MoonIcon"
import SunIcon from "./icons/SunIcon"

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {

  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode])


  return (
    <header className="container mx-auto pt-8 px-4 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">Todo</h1>

        <div className="inline-flex items-center cursor-pointer w-14 h-7 bg-gray-200 rounded-full dark:bg-[#25273B] drop-shadow-md">
          <button className="absolute rounded-full bg-[#25273B] border-[#25273B] dark:bg-white dark:border-white border-4 translate-x-0 dark:translate-x-8 justify-between transition-all "
            onClick={() => setDarkMode(!darkMode)}>
            <span className="h-3 w-3 justify-center overflow-hidden">
              {darkMode
                ? <SunIcon fill="#25273B" />
                : <MoonIcon fill="#FFF" />}
            </span>
          </button>
        </div>

      </div >
    </header >
  )
}



export default Header;