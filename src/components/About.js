import React from "react";
import devaImg from '../coding.jpg'
import Geeks  from './Geeks' 

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white	 text-description type-me  ">
            <Geeks   text=" Hi, I'm Devashish.  " /> 
            
          
            
            
            <br className="hidden lg:inline-block bg-lime-700" /> I love to create amazing Web Applications!
          </h1>
          
         
          <p className="mb-8 leading-relaxed  text-purple-200">
           This is my Portfolio made with Mainly React JS and Tailwind CSS 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-red-400 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
Contact Me.            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-blue-400 bg-blue-800 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 hover:text-white rounded text-lg">
              My work until now
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-3/3 w-5/6  " >
          <img
            className="object-cover object-center   animate-pulse hover:rounded-full ease-in-out duration-300 ...  "
            alt="hero"
            src={devaImg}
          />
        </div>
      </div>
    </section>
  );}