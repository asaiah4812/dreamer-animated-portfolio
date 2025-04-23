"use client";
import React from "react";
import { DiDjango } from "react-icons/di";
import Image from "next/image";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { ProgressiveBlur } from "@/components/motion-primitives/progressive-blur";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
import { SiCss3 } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { CgFigma } from "react-icons/cg";
import { BiLogoPostgresql } from "react-icons/bi";
import { CheckCheck, Handshake, Home } from "lucide-react";

interface Icons {
  id: number;
  icon: React.ReactNode;
}

const Icons: Icons[] = [
  {
    id: 1,
    icon: <DiDjango className="text-white text-6xl" />,
  },
  {
    id: 2,
    icon: <SiPython className="text-white text-6xl" />,
  },
  {
    id: 3,
    icon: <BiLogoPostgresql className="text-white text-6xl" />,
  },
  {
    id: 4,
    icon: <FaReact className="text-white text-6xl" />,
  },
  {
    id: 5,
    icon: <RiNextjsFill className="text-white text-6xl" />,
  },
  {
    id: 6,
    icon: <SiJavascript className="text-white text-6xl" />,
  },
  {
    id: 7,
    icon: <ImHtmlFive className="text-white text-6xl" />,
  },
  {
    id: 8,
    icon: <SiCss3 className="text-white text-6xl" />,
  },
  {
    id: 9,
    icon: <SiFlask className="text-white text-6xl" />,
  },
  {
    id: 10,
    icon: <CgFigma className="text-white text-6xl" />,
  },
];

export default function HeroSection() {
  return (
    <main className="container mx-auto">
      <section className="py-20 bg-slate-600/40 backdrop-blur-sm rounded-t-lg">
        <div className="mx-auto px-2 md:px-6">
          <div className="mx-auto flex w-full items-center justify-between gap-12 md:flex-row px-4 xl:px-8">
            <div className="mx-auto md:w-1/2">
              <span className="ring-1 px-5 py-1 text-sm rounded-full inline-flex items-center w-fit ring-slate-400 text-slate-50 uppercase">
                <Home className="text-teal-500 me-2" size={16} /> introduce
              </span>
              <h1 className="mt-8 max-w-full xl:max-w-3xl text-balance text-3xl text-white font-semibold lg:text-4xl lg:mt-16 xl:text-5xl">
                I Code The 🖥️{" "}
                <span className="text-teal-600">Digital Solution</span>
              </h1>
              <p className="mt-8 max-w-full xl:max-w-3xl text-[#999999] text-md">
                I&lsquo;m a{" "}
                <span className="text-white">Fullstack Webdeveloper</span> with
                3+ years of experience building and scaling web applications
                using Python, Django, and REST APIs. I also enjoy working on the
                full stack—adding a dash of React, Next.js, and TypeScript to
                bring ideas to life.
              </p>
              <div className="flex items-center space-x-1 sm:space-x-4 mt-4">
                <span className="text-[#999999] text-xs sm:text-sm flex items-center gap-2 py-2">
                  <CheckCheck className="text-teal-600" />
                  Available for work
                </span>
                <span className="text-[#999999] text-xs sm:text-sm flex items-center gap-2 py-2">
                  <CheckCheck className="text-teal-600" />
                  Full Time Job
                </span>
              </div>
              <div className="mt-12 items-center group gap-2 sm:flex-row">
                <button
                  className="bg-teal-600 hover:bg-teal-700 transition-all ease-in-out duration-100 text-white rounded-full group-hover:text-slate-200 px-5 py-3"
                  onClick={() => {
                    window.location.href = "/dreamer-resume.pdf";
                  }}
                >
                  <span className="inline-flex gap-2">
                    Hire me <Handshake className="animate-bounce" />
                  </span>
                </button>
              </div>
            </div>
            <div className="rounded-md relative h-[400px] md:w-1/2 overflow-hidden">
              <Image
                className="w-full"
                src="/dreamer.svg"
                alt="Abstract Object"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-slate-600 hidden rounded-b-lg md:block">
        <div className="group relative m-auto max-w-6xl px-2 md:px-6">
          <div className="flex flex-col items-center md:flex-row">
            <div className="md:max-w-44 md:border-r md:pr-6">
              <p className="text-end text-white text-sm">
                Powerful tools <br /> i use
              </p>
            </div>
            <div className="relative py-6 md:w-[calc(100%-11rem)]">
              <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                {Icons.map((icon) => (
                  <div key={icon.id} className="flex">
                    {icon.icon}
                  </div>
                ))}
              </InfiniteSlider>

              <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
              <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
              <ProgressiveBlur
                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                direction="left"
                blurIntensity={1}
              />
              <ProgressiveBlur
                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                direction="right"
                blurIntensity={1}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
