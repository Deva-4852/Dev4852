import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-cyan-900 md:sticky top-0 z-10  ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center opacity-50 md:opacity-100">
        <a className="title-font font-medium text-white mb-4 md:mb-0 ">
          <a  href="javascript.void(0)" href="#about" className="ml-3 text-xl
 ">
           Devashish Hiwale
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l  md:border-gray-700 opacity-75 ...	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white text-xl text-purple-200">
            Past Work
          </a>
          <a href="javascript.void(0)" href="#skills" className="mr-5 hover:text-white text-xl text-purple-200">
            Skills
          </a>
         
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center bg-orange-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
          Let's be in touch..
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
