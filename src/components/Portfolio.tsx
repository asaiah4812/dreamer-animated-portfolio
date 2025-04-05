"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaBehance } from "react-icons/fa6";
import { CloudDownload } from 'lucide-react';



const infos = [
    {
        id: 1,
        title:  "Residence",
        information: "Nigeria"
    },
    {
        id: 2,
        title: "City",
        information: "Jalingo"
    },
    {
        id: 3,
        title: "Age",
        information: "23"
    },
]

const Socials = [
  {
    id: 1,
    name: "Facebook",
    icon: <FaFacebook />,
    link: "#",
  },
  {
    id: 2,
    name: "Linkedin",
    icon: <FaLinkedinIn />,
    link: "#",
  },
  {
    id: 3,
    name: "Twitter",
    icon: <FaTwitter />,
    link: "#",
  },
  {
    id: 4,
    name: "Instagram",
    icon:<FaInstagram />,
    link: "#",
  },
  {
    id: 5,
    name: "Behance",
    icon: <FaBehance />,
    link: "#",
  },
];

const Portfolio = () => {
  const [text] = useTypewriter({
    words: ["Web Developer", "App Developer", "UI/UX Designer", "Entrepreneur"],
    loop: true, // Ensures continuous typing
    typeSpeed: 50, // Smoother typing
    deleteSpeed: 60, // Smoother deleting
    delaySpeed: 1500, // Slightly longer pause before switching words
  });

  return (
    <div className="flex items-center w-full justify-center xl:sticky top-0 left-0 px-2 sm:px-5 pb-10 pt-24 xl:pt-8 xl:col-span-2 min-h-[80vh] md:h-fit">
      <div
        className="px-4 sm:px-8 lg:px-5 pt-9 py-10 space-y-3 rounded-lg w-[95%] max-w-[400px] h-full flex items-center flex-col justify-between md:h-fit bg-slate-600/40 backdrop-blur-sm"
        style={{
          clipPath:
            "polygon(0% 15%, 0 0, 15% 0%, 66% 0, 85% 15%, 100% 15%, 100% 100%, 0 100%)",
        }}
      >
        <div className="relative w-[120px] sm:w-[160px] py-2 mx-auto h-[120px] sm:h-[160px] bg-slate-500 p-4 ring-8 ring-slate-600 rounded-full overflow-hidden">
          <Image src={"/me.jpg"} alt="Profile" fill className="object-cover" />
        </div>
        <div className="text-center mx-auto">
          <h2 className="font-medium text-white text-xl sm:text-2xl py-2">
            Henson Asaiah
          </h2>
          <span className="text-teal-600 text-base sm:text-lg">{text}</span>
          <Cursor cursorColor="teal" />
        </div>
        <hr className="my-3 sm:my-4 bg-slate-600/50 h-1 w-full" />
        <div className="flex flex-col space-y-1 sm:space-y-2 justify-between w-full">
          {infos.map((info) => (
            <div
              key={info.id}
              className="flex items-center justify-between py-1 sm:py-2"
            >
              <strong className="text-white text-base sm:text-lg font-medium">
                {info.title}:{" "}
              </strong>
              <span className="text-slate-400 text-sm sm:text-lg font-light">
                {info.information}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center space-x-2 px-4 sm:px-6 rounded-md py-2 sm:py-3 w-full bg-slate-600/60 text-slate-400">
          {Socials.map((social) => (
            <Link key={social.id} href={social.link}>
              {social.icon}
            </Link>
          ))}
        </div>
        <a
          href="/dreamer-resume.pdf"
          download
          className="py-2 sm:py-3 w-full flex items-center justify-center gap-2 font-medium rounded-full uppercase bg-teal-600 text-white"
        >
          download cv <CloudDownload className="animate-pulse" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;

