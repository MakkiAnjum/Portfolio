import React from 'react';
import ProgressBar from '../../chip/ProgressBar';
import SkillBox from '../../chip/SkillBox';

import { IoLogoHtml5, IoLogoCss3 } from 'react-icons/io';

import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiReact,
  SiTypescript,
  SiMicrosoftvisio,
  SiGit,
  SiMysql,
  SiHtml5,
} from 'react-icons/si';
import { GrCode } from 'react-icons/gr';
import { SiNextdotjs } from 'react-icons/si';
import { FaAws, FaReact } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io';

const Skills = ({ darkMode }) => {
  return (
    <div id="skills">
      <div className=" container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5">
          <h3 className=" text-3xl font-black text-gray-500 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] right-0 absolute w-[90%] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex">
          <div className="flex flex-wrap p-5 gap-10 items-center justify-center sm:w-full">
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                logo={<IoLogoNodejs />}
                black={'white'}
                white={'black'}
                skill={'Node Js'}
              />
              <SkillBox
                logo={<SiMongodb />}
                black={'white'}
                white={'black'}
                skill={'MongoDB'}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                logo={<SiExpress />}
                black={'black'}
                white={'white'}
                skill={'Express Js'}
              />
              <SkillBox
                className=""
                logo={<GrCode />}
                black={'black'}
                white={'white'}
                skill={'C#'}
              />
            </div>
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<SiNextdotjs />}
                black={'white'}
                white={'black'}
                skill={'Next Js'}
              />
              <SkillBox
                className=""
                logo={<SiReact />}
                black={'white'}
                white={'black'}
                skill={'React Js'}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<SiJavascript />}
                black={'black'}
                white={'white'}
                skill={'JavaScript'}
              />
              <SkillBox
                className=""
                logo={<SiTypescript />}
                black={'black'}
                white={'white'}
                skill={'TypeScript'}
              />
            </div>
            <div className="first2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<FaAws />}
                black={'white'}
                white={'black'}
                skill={'AWS'}
              />
              <SkillBox
                className=""
                logo={<SiGit />}
                black={'white'}
                white={'black'}
                skill={'Git'}
              />
            </div>
            <div className="last2 flex flex-col gap-10">
              <SkillBox
                className=""
                logo={<SiMysql />}
                black={'black'}
                white={'white'}
                skill={'SQL'}
              />
              <SkillBox
                className=""
                logo={<SiHtml5 />}
                black={'black'}
                white={'white'}
                skill={'HTML CSS'}
              />
            </div>
          </div>
        </div>

        {/* icons */}
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className=" container m-auto flex items-center justify-center mt-8 gap-8 md:gap-5"
        >
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/c-plus-plus-logo.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/python--v1.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios/50/null/react-native--v1.png"
          />

          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/sass.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/git.png"
            />
            <img
              className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
              src="https://img.icons8.com/windows/50/null/sass--v1.png"
            />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/color/48/null/c-plus-plus-logo.png"
          />
          <img
            className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]"
            src="https://img.icons8.com/ios-filled/50/null/python.png"
          />
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/javascript--v1.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/color/48/null/nodejs.png"/>
          <img className="w-[40px] h-[40px] md:w-[35px] md:h-[35px]" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/null/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png"/>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
