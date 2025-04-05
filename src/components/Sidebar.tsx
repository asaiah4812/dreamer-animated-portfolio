"use client";
import {
  BriefcaseBusiness,
  FileText,
  FolderGit2,
  GraduationCap,
  House,
  Mails,
  Rss,
  User,
  Link as Limk,
} from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useScroll } from "@/context/RefContext";

// Define the type for section IDs
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

const Sidebar = () => {
  const sectionRefs = useScroll();
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = (sectionId: keyof typeof sectionRefs) => {
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
    }
  };

  // Track scroll position to update active section
  useEffect(() => {
    const handleScrollUpdate = () => {
      // const scrollPosition = window.scrollY + 100; // Add offset to account for navbar

      // Find which section is currently in view
      for (const link of Links) {
        const element =
          sectionRefs[link.id as keyof typeof sectionRefs]?.current;
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

  return (
    <div className="ring-1 ring-slate-500 bg-slate-700/40 backdrop-blur-sm rounded-full mx-auto w-[80px] py-5 flex flex-col items-center">
      <div className="w-12 h-12 p-4 mb-4 xl:mb-5 rounded-full ring-2 relative ring-teal-400">
        <Image src={"/logo.svg"} fill alt="logo" />
      </div>
      <div className="flex flex-col items-center space-y-1 xl:space-y-2">
        {Links.map((link) => (
          <button
            className={`relative group p-2 xl:p-3 text-sm rounded-full transition-all duration-300 ${
              activeSection === link.id
                ? "bg-teal-500/20"
                : "hover:bg-slate-500/60"
            }`}
            key={link.id}
            onClick={() => handleScroll(link.id as keyof typeof sectionRefs)}
          >
            {React.cloneElement(link.icon, {
              className: `transition-colors duration-300 ${
                activeSection === link.id
                  ? "text-teal-400"
                  : "text-white group-hover:text-teal-400"
              }`,
            })}
            <div className="absolute top-2 hidden group-hover:block -left-20 px-4 py-1 text-xs text-white rounded-md bg-slate-500/60">
              {link.name}
            </div>
          </button>
        ))}
      </div>
      <div className="p-1 rounded-full ring-1 w-9 h-9 mt-6 flex items-center justify-center text-white ring-slate-700">
        <Limk className="" size={12} />
      </div>
    </div>
  );
};

export default Sidebar;
