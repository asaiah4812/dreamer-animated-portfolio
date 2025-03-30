"use client"
import { AlignJustify, BriefcaseBusiness, FileText, FolderGit2, GraduationCap, House, Mails, Rss, User, X } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'

const Links = [
  {
    id: 1,
    name: "Home",
    icon: <House className="text-white"/>,
  },
  {
    id: 2,
    name: "Profile",
    icon: <User className="text-white"/>,
  },
  {
    id: 3,
    name: "Service",
    icon: <BriefcaseBusiness className="text-white"/>,
  },
  {
    id: 4,
    name: "Skill",
    icon: <GraduationCap className="text-white"/>,
  },
  {
    id: 5,
    name: "Resume",
    icon: <FileText className="text-white"/>,
  },
  {
    id: 6,
    name: "Portfolio",
    icon: <FolderGit2 className="text-white"/>,
  },
  {
    id: 7,
    name: "Blog",
    icon: <Rss className="text-white"/>,
  },
  {
    id: 8,
    name: "Contact",
    icon: <Mails className="text-white"/>,
  },
];

const Navbar:React.FC = () => {
    const [showSide, setShowSide] = useState<boolean>(false)
  return (
    <nav className="flex items-center fixed xl:hidden w-full z-50 inset-x-0 top-0 justify-between px-4 py-4 bg-slate-500/50 backdrop-blur-md">
      <Link href={"#"} >
        <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
      </Link>
      <div className="">
        <button
          onClick={() => setShowSide(true)}
          className="text-white p-2 rounded-full bg-slate-700"
        >
          <AlignJustify />
        </button>
        {showSide && (
        <div className="fixed w-[250px] bg-slate-800/90 top-0 backdrop-blur-md space-y-5 h-screen flex flex-col right-0 p-4 ">
          <button
            onClick={() => setShowSide(false)}
            className="w-12 h-12 self-end text-white flex items-center justify-center rounded-full bg-slate-600"
          >
            <X />
          </button>
          <h2 className="font-medium text-white my-4">Menu</h2>
            <div className="flex flex-col px-3 space-y-8 m7-5">
              {Links.map((link) => (
                <Link
                  href={"#"}
                  className="flex items-center space-x-2 text-slate-500 group"
                  key={link.id}
                >
                  {link.icon}{" "}
                  <span className="group-hover:text-white">{link.name}</span>
                </Link>
              ))}
            </div>
        </div>
          )}
      </div>
    </nav>
  );
}

export default Navbar