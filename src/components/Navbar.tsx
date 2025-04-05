"use client";
import {
  AlignJustify,
  BriefcaseBusiness,
  FileText,
  FolderGit2,
  GraduationCap,
  House,
  Mails,
  Rss,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useScroll } from "@/context/RefContext";

// Define the type for section IDs to match RefContext
type SectionId =
  | "home"
  | "profile"
  | "service"
  | "skill"
  | "resume"
  | "portfolio"
  | "blog"
  | "contact";

interface LinkItem {
  id: SectionId;
  name: string;
  icon: React.ReactElement<{ size?: number; className?: string }>;
}

const Links: LinkItem[] = [
  {
    id: "home",
    name: "Home",
    icon: <House size={20} className="text-white group-hover:text-teal-400" />,
  },
  {
    id: "profile",
    name: "Profile",
    icon: <User size={20} className="text-white group-hover:text-teal-400" />,
  },
  {
    id: "service",
    name: "Service",
    icon: (
      <BriefcaseBusiness
        size={20}
        className="text-white group-hover:text-teal-400"
      />
    ),
  },
  {
    id: "skill",
    name: "Skill",
    icon: (
      <GraduationCap
        size={20}
        className="text-white group-hover:text-teal-400"
      />
    ),
  },
  {
    id: "resume",
    name: "Resume",
    icon: (
      <FileText size={20} className="text-white group-hover:text-teal-400" />
    ),
  },
  {
    id: "portfolio",
    name: "Portfolio",
    icon: (
      <FolderGit2 size={20} className="text-white group-hover:text-teal-400" />
    ),
  },
  {
    id: "blog",
    name: "Blog",
    icon: <Rss size={20} className="text-white group-hover:text-teal-400" />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <Mails size={20} className="text-white group-hover:text-teal-400" />,
  },
];

const Navbar: React.FC = () => {
  const [showSide, setShowSide] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const sectionRefs = useScroll();

  useEffect(() => {
    const handleScrollUpdate = () => {
      // const scrollPosition = window.scrollY + 100;

      for (const link of Links) {
        const element = sectionRefs[link.id]?.current;
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= 100 && bottom >= 100) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollUpdate);
    return () => window.removeEventListener("scroll", handleScrollUpdate);
  }, [sectionRefs]);

  const handleScroll = (sectionId: SectionId) => {
    const element = sectionRefs[sectionId]?.current;
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
      setShowSide(false);
    }
  };

  return (
    <nav className="flex items-center fixed xl:hidden w-full z-50 inset-x-0 top-0 justify-between px-4 py-4 bg-slate-500/50 backdrop-blur-md">
      <button
        onClick={() => handleScroll("home")}
        className="focus:outline-none"
      >
        <Image src={"/logo.svg"} alt="Logo" width={40} height={40} />
      </button>
      <div className="">
        <button
          onClick={() => setShowSide(true)}
          className="text-white p-2 rounded-full bg-slate-700"
        >
          <AlignJustify />
        </button>
        {showSide && (
          <div className="fixed w-[250px] bg-slate-800/90 top-0 backdrop-blur-md space-y-5 h-screen flex flex-col right-0 p-4">
            <button
              onClick={() => setShowSide(false)}
              className="w-12 h-12 self-end text-white flex items-center justify-center rounded-full bg-slate-600"
            >
              <X />
            </button>
            <h2 className="font-medium text-white my-4">Menu</h2>
            <div className="flex flex-col px-3 space-y-8 m7-5">
              {Links.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScroll(link.id)}
                  className={`flex items-center space-x-2 group transition-colors duration-300 ${
                    activeSection === link.id
                      ? "text-teal-400"
                      : "text-slate-500 hover:text-teal-400"
                  }`}
                >
                  {React.cloneElement(link.icon, {
                    className: `transition-colors duration-300 ${
                      activeSection === link.id
                        ? "text-teal-400"
                        : "text-slate-500 group-hover:text-teal-400"
                    }`,
                  })}
                  <span className="group-hover:text-teal-400 transition-colors duration-300">
                    {link.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
