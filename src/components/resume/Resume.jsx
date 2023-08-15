import React from 'react';

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-500 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2  rounded-3xl py-1 px-8 font-semibold text-xl bg-gradient-to-r from-green-300 to-blue-400">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-green-300"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-green-300 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Software Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  SYNECTICS Solutions
                </span>
                <span className=" text-[.9rem] font-semibold  sm:text-base">
                  June 2022 - Present
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                  A highly focused and motivated engineer in a variety of
                  development roles. I enjoy finding solutions to a varying
                  number of challenges and have an excellent understanding of
                  how the latest technologies can be used. I’m a quick learner
                  and being flexible means, I can adjust in any environment.
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl bg-gradient-to-r from-green-300 to-blue-400">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-green-300"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-blue-400"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-green-300 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  MS in Software Engineering
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Staffordshire University, United Kindgom
                </span>
                <span className=" text-[.9rem] font-semibold sm:text-base">
                  Jan 2021 - Jan 2022
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                  Did Dissertation on Mobile Cloud Computing. During the couse I
                  focused on Software Engineering best practices.
                  <strong> Skills </strong>: Node.js · React.js · JavaScript ·
                  Amazon Web Services (AWS) · TypeScript
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
