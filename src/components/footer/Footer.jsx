import React from 'react';
import { FaLinkedinIn, FaTelegramPlane } from 'react-icons/fa';
import { IoLogoGithub, IoLogoWhatsapp } from 'react-icons/io';
import { RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <div id="works" className=" mx-auto m-auto h-[300px]  mt-16 sm:h-[250px]">
      <div className=" bg-gradient-to-r from-green-300 to-blue-400 h-full flex flex-col gap-8 items-center justify-between p-10 sm:p-7">
        <h2 data-aos="zoom-out" className=" font-bold text-5xl sm:text-3xl">
          Let's Talk
        </h2>
        <div className=" flex items-center justify-center gap-8 sm:gap-5">
          <a
            data-aos="fade-up"
            data-aos-duration="1000"
            target="_blank"
            href="https://www.linkedin.com/in/makkianjum/"
            className="box font-medium text-white   flex items-center justify-center flex-col"
          >
            <FaLinkedinIn className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>LinkedIn</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1200"
            href="https://github.com/makkianjum"
            target="_blank"
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <IoLogoGithub className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>GitHub</p>
          </a>
          <a
            data-aos="fade-up"
            data-aos-duration="1400"
            href=""
            className="box font-medium text-white  flex items-center justify-center flex-col"
          >
            <RiInstagramFill className=" text-black text-3xl hover:scale-125 cursor-pointer" />
            <p>Instagram</p>
          </a>
        </div>
        <div className="sm:text-[12px]">
          | Copyright &copy;{' '}
          <span>{new Date().getFullYear()} Makki Anjum. </span> All rights
          reserved
          <a href="https://www.linkedin.com/in/makkianjum/"></a> |
        </div>
      </div>
    </div>
  );
};

export default Footer;
