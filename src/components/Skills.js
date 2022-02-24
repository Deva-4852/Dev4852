import {  ChipIcon } from "@heroicons/react/solid";
import React from "react";
import {SiJavascript  , SiReact , SiAngular , SiTailwindcss } from 'react-icons/si';
import {DiNodejsSmall , DiMongodb , DiHtml5 , DiCss3} from 'react-icons/di'


export default function Skills() {
    return ( <section id="skills">
    <div className="container px-8 py-8 mx-auto  display:flex font-size:100px">
      <div className="text-center mb-20">
        <ChipIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4 ">
          Skills &amp; Technologies
        </h1>
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-purple-200">
        Skills, I have acquired So far..
        </p>
      </div>
      <div className="  flex grid gap-9 grid-cols-2 px-8 py-4  ">

      
           
            <div className="bg-blue-800  items-center text-6xl p-4 ... hover:animate-bounce  ease-in-out     ">
              <SiJavascript className="text-green-400   Java " />
              <span className="title-font font-medium text-white ">
              
                
              </span>

            </div>
            

            <div className="bg-blue-800  items-center text-6xl p-4 ...  hover:animate-bounce  ">
              <SiReact className="text-green-400  items-center visible ...  " />
              <span className="title-font font-medium text-white font-size:100px">
                
              </span>
            </div>
            <div className="bg-blue-800   items-center text-6xl p-4 ...  hover:animate-bounce">
              <DiNodejsSmall  className="text-green-400   items-center" />
              <span className="title-font font-medium text-white">
                
              </span>
            </div>

            <div className="bg-blue-800  items-center text-6xl p-4 ...  hover:animate-bounce">
              <DiMongodb className="text-green-400" />
              <span className="title-font font-medium text-white">
                
              </span>
            </div>
            <div className="bg-blue-800  items-center text-6xl p-4   ...  hover:animate-bounce ">
              <SiAngular className="text-green-400 " />
              <span className="title-font font-medium text-white">
                
              </span>
            </div>

            <div className="bg-blue-800 items-center text-6xl p-4 ... hover:animate-bounce ">
              <DiHtml5 className="text-green-400 " />
              <span className="title-font font-medium text-white">
                
              </span>
            </div>

            <div className="bg-blue-800  items-center text-6xl p-4   ...  hover:animate-bounce">
              <SiTailwindcss className="text-green-400 " />
              <span className="title-font font-medium text-white">
                
              </span>
            </div>

            <div className="bg-blue-800  items-center text-6xl hover:animate-bounce">
              <DiCss3 className="text-green-400 " />
              <span className="title-font font-medium text-white">
                
              </span>
            </div>




          </div>
          
        
      
    </div>
    
  
 
  </section>
  
  
);
}