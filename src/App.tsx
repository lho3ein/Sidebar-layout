import { useState } from "react";

function App() {
  const [is_darwerProfile, setIs_darwerProfile] = useState(false);
  const [show_dashboard, setShow_dashboard] = useState(false);
  const [isDark_Mode, setDark_Mode] = useState(false);

  const handel_clickMain = () => {
    if (is_darwerProfile == true) {
      setIs_darwerProfile(false);
    }
  };
  return (
    <div className={`bg-white font-Inter flex overflow-hidden ${isDark_Mode ? "dark" : ""}`} onClick={handel_clickMain}>
      <div onClick={() => setShow_dashboard(false)} className={`${show_dashboard ? "" : "hidden"} w-full h-full fixed bg-gray-900 dark:bg-opacity-80 bg-opacity-50`}></div>
      <aside className={`lg:flex flex-col ${show_dashboard ? "flex" : "hidden"} absolute lg:relative w-2/4 lg:w-1/6 h-screen bg-indigo-600 dark:bg-gray-600 translate-x-0`}>
        <span className="lg:hidden absolute left-52 top-3">
          <button type="button" className="text-red-700 font-bold" onClick={() => setShow_dashboard(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" className="h-6 w-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </span>
        <div className="pl-1 pt-3 h-16 w-12 flex">
          <img className="h-7 max-w-full" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company" />
          <h2 className="text-white text-xl font-bold pl-2">PowerCorn</h2>
        </div>
        <nav className="px-4 pb-3 flex flex-col flex-1 gap-y-11">
          <div className="flex-1">
            <ul className="space-y-5">
              <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    ></path>
                  </svg>
                  <p className="font-medium pl-2">Dashboard</p>
                </a>
              </li>
              <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    ></path>
                  </svg>
                  <p className="font-medium pl-2">Team</p>
                </a>
              </li>
              <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    ></path>
                  </svg>
                  <p className="font-medium pl-2">Project</p>
                </a>
              </li>
              <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                    ></path>
                  </svg>
                  <p className="font-medium pl-2">Calender</p>
                </a>
              </li>
              <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
                    ></path>
                  </svg>
                  <p className="font-medium pl-2">Documents</p>
                </a>
              </li>
              <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                <a href="#" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"></path>
                  </svg>
                  <p className="font-medium pl-2">Reports</p>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-indigo-200 pl-2">Your Teams</p>
            <div>
              <ul className="mt-2.5 space-y-1">
                <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                  <a href="#" className="flex items-center">
                    <span className="text-white flex h-6 w-6 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 font-medium text-[0.625rem]">H</span>
                    <p className="font-semibold text-[0.900rem] ml-2 tracking-wide">HeroIcons</p>
                  </a>
                </li>
                <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                  <a href="#" className="flex items-center">
                    <span className="text-white flex h-6 w-6 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 font-medium text-[0.625rem]">T</span>
                    <p className="font-semibold text-[0.900rem] ml-2 tracking-wide">Tailwind</p>
                  </a>
                </li>
                <li className="hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
                  <a href="#" className="flex items-center">
                    <span className="text-white flex h-6 w-6 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 font-medium text-[0.625rem]">W</span>
                    <p className="font-semibold text-[0.900rem] ml-2 tracking-wide">Workcation</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <a href="#" className="flex items-center hover:bg-indigo-700 rounded-lg p-2 text-indigo-200 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                ></path>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <p className="font-medium pl-2">Settings</p>
            </a>
          </div>
        </nav>
      </aside>
      <main className="w-full h-screen flex flex-col">
        <nav className="h-16 bg-white dark:bg-gray-800 flex px-4 border-b-2 border-gray-200 dark:border-gray-500 shadow box-border">
          <div className="lg:hidden flex h-full">
            <button type="button" className="items-center" onClick={() => setShow_dashboard(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-6 h-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
              </svg>
            </button>
          </div>
          <div className="flex items-center cursor-text w-[40%] lg:w-9/12 pl-2 lg:pl-0">
            <label htmlFor="sinput" className="cursor-text">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="text-gray-400 w-5 h-6 u aa as cg ph sc axp">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </label>
            <input
              id="sinput"
              type="search"
              className="ml-1 font-medium text-sm text-slate-700 dark:text-gray-300 dark:bg-gray-800 w-full h-full focus:outline-none"
              placeholder="Search..."
            />
          </div>
          <div className="w-[60%] lg:w-3/12 ml-4 lg:ml-12 flex items-center space-x-2 lg:space-x-4">
            <div className="flex space-x-2">
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="size-7 text-gray-400 hover:text-gray-500 dark:hover:text-gray-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                  ></path>
                </svg>
              </button>
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-400 hover:text-gray-500 dark:hidden"
                  onClick={() => setDark_Mode(true)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-gray-300 hover:text-gray-100 hidden dark:block"
                  onClick={() => setDark_Mode(false)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                  />
                </svg>
              </button>
            </div>
            <span className="text-gray-400 dark:text-gray-200 font-extralight">|</span>
            <div className="flex items-center relative">
              <div className="w-8 h-8 bg-slate-500 rounded-full flex-shrink-0">{/* <img src="" alt="Profile" /> */}</div>
              <div>
                <button className="flex items-center ml-3 lg:ml-6 text-gray-800 dark:text-gray-300" onClick={() => setIs_darwerProfile(!is_darwerProfile)}>
                  <span className="font-medium">lho3ein</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 h-5 ml-2">
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <div
                  className={`${
                    is_darwerProfile ? "flex" : "hidden"
                  } flex-col bg-white dark:bg-gray-600 shadow border border-gray-200 dark:border-gray-800 text-gray-800 dark:text-gray-300 absolute left-5 resize-none rounded w-[7.15rem] lg:w-36 lg:h-24 py-2 mt-3`}
                >
                  <span className="p-2 lg:px-6 px-3 hover:bg-slate-100 dark:hover:bg-gray-700 text-sm lg:text-base font-medium cursor-pointer">Your Profile</span>
                  <span className="p-2 lg:px-6 px-3 hover:bg-slate-100 dark:hover:bg-gray-700 text-sm lg:text-base font-medium cursor-pointer">Sign Out</span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <section className="bg-white dark:bg-gray-800 w-full h-full px-8 py-10">
          <div className="border-dashed border-2 box-border rounded-xl bg-white dark:bg-gray-800 h-full w-full">
            <svg className="w-full h-full stroke-gray-300 dark:stroke-gray-500" fill="none">
              <defs>
                <pattern id="pattern-1526ac66-f54a-4681-8fb8-0859d412f251" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                </pattern>
              </defs>
              <rect stroke="none" fill="url(#pattern-1526ac66-f54a-4681-8fb8-0859d412f251)" width="100%" height="100%"></rect>
            </svg>
          </div>
        </section>
      </main>
    </div>
  );
}
export default App;
