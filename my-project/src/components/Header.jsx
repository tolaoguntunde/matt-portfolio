import React from "react";
import headerlogo from "../images/mf-logo.svg";

const Header = () => {
  return (
    // <div className='w-screen flex flex-row gap-[1000px] items-center shadow-lg my-2 p-2'>
    //     <div className='lg:flex w-10 pl-4 items-center' >
    //     <img src={headerlogo}  alt="" />
    //     </div>

    //     <div className='hidden lg:flex flex-row gap-8 items-center'>
    //         <div className='hover:text-purple-800 tracking-wide text-lg font-light'>Mentorship</div>
    //         <div className='border border-purple-800 px-5 rounded-full text-purple-800 hover:bg-purple-600 hover:text-white tracking-wide text-lg font-light'>Say Hello</div>
    //     </div>
    // </div>

    <header>
      <nav class="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div class="px-6 w-full flex flex-wrap items-center justify-between">
          <div class="flex items-center">
            <button
              class="navbar-toggler border-0 py-3 lg:hidden leading-none text-xl bg-transparent text-gray-600 hover:text-gray-700 focus:text-gray-700 transition-shadow duration-150 ease-in-out mr-2"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContentY"
              aria-controls="navbarSupportedContentY"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                class="w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <div className="hidden lg:flex w-10 pl-4 items-center">
              <img src={headerlogo} alt="" />
            </div>
          </div>

          <div className="hidden lg:flex flex-row gap-8 items-center pr-4">
            <div className="hover:text-purple-800 tracking-wide text-lg font-light">
              Mentorship
            </div>
            <div className="border border-purple-800 px-5 rounded-full text-purple-800 hover:bg-purple-600 hover:text-white tracking-wide text-lg font-light">
              Say Hello
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
