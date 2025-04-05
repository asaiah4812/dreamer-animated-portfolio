"use client";
import { useScroll } from "@/context/RefContext";
import Card ,  { GridCard }from "@/components/card";
import HeroSection from "@/components/Hero";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";
import { Blocks, BriefcaseBusiness, Codesandbox, FileText, FolderCode, FolderGit2, SquareDashedBottomCode, User } from "lucide-react";
import LayoutGridDemo from "@/components/ProjectComponent";
import Resume from "@/components/Resume";
import { BentoGridDemo } from "@/components/Blog";

const GridLoop = [
  {
    id: 1,
    title: "App Development",
    desc: "I specialize in creating high-performance mobile apps using React          Native",
    icon: (
      <Codesandbox
        className="text-teal-600 group-hover:animate-pulse"
        size={40}
      />
    ),
  },
  {
    id: 2,
    title: "Web Development",
    desc: "I build responsive, user-friendly websites using modern web technologies.",
    icon: (
      <FolderCode
        className="text-teal-600 group-hover:animate-pulse"
        size={40}
      />
    ),
  },
  {
    id: 3,
    title: "Digital Products",
    desc: "I design and develop digital products that meet user needs and business objectives.",
    icon: (
      <SquareDashedBottomCode
        className="text-teal-600 group-hover:animate-pulse"
        size={40}
      />
    ),
  },
  {
    id: 4,
    title: "UI/UX Design",
    desc: "I design and develop digital products that meet user needs and business objectives.",
    icon: (
      <Blocks className="text-teal-600 group-hover:animate-pulse" size={40} />
    ),
  },
];


export default function Home() {
  const sectionRefs = useScroll();

  return (
    <div className="md:p-10">
      <div ref={sectionRefs.home}>
        <HeroSection />
      </div>
      <div ref={sectionRefs.profile}>
        <Card
          title={"about me"}
          icon={<User size={16} className="text-teal-500 me-2" />}
        >
          <div className="space-y-5">
            <h2 className="text-4xl text-white font-semibold">
              About <span className="text-teal-600 font-bold">Me</span>
            </h2>

            <p className="text-[#999999] md:max-w-3xl">
              Hi 👋🏽, I am{" "}
              <span className="font-semibold text-white">Asaiah Henson</span>, a
              lifelong learner, I began my coding journey with Python at 21. My
              dedication to React Native development has led to years of
              experience creating cutting-edge mobile solutions.
            </p>
            <div className="flex flex-wrap items-center gap-5 mt-4">
              <span className="border border-slate-400 text-sm md:text-md border-dashed text-white px-3 py-1 md:px-5 md:py-2 rounded-full">
                Python
              </span>
              <span className="border border-slate-400 border-dashed text-white px-3 py-1 md:px-5 md:py-2 rounded-full">
                Javascript
              </span>
              <span className="border border-slate-400 border-dashed text-white px-3 py-1 md:px-5 md:py-2 rounded-full">
                Django
              </span>
              <span className="border border-slate-400 border-dashed text-white px-3 py-1 md:px-5 md:py-2 rounded-full">
                Nextjs
              </span>
            </div>
            <article className="flex flex-wrap md:space-x-12">
              <div className="flex flex-col items-center mt-4 gap-2">
                <div className="space-x-5 py-1 flex items-center text-sm text-white">
                  <span className="text-[#999999] me-4">Phone</span>
                  <span className="text-[#999999]">:</span>
                  <h4 className="text-md">+234 9036804525</h4>
                </div>
                <div className="space-x-5 py-1 flex items-center text-sm text-white">
                  <span className="text-[#999999] me-4">Github</span>
                  <span className="text-[#999999]">:</span>
                  <h4 className="text-md">@asaiah4812</h4>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-2">
                <div className="space-x-5 py-1 flex items-center text-sm text-white">
                  <span className="text-[#999999] me-4">Phone</span>
                  <span className="text-[#999999]">:</span>
                  <h4 className="text-md">+234 9036804525</h4>
                </div>
                <div className="space-x-5 py-1 flex items-center text-sm text-white">
                  <span className="text-[#999999] me-4">Github</span>
                  <span className="text-[#999999]">:</span>
                  <h4 className="text-md">@asaiah4812</h4>
                </div>
              </div>
            </article>
            <div className="inline-flex space-x-5 py-2">
              <div className="space-y-4">
                <h1 className="font-bold text-5xl text-teal-600">3+</h1>
                <span className="text-[#999999] text-sm">
                  Years Of Experience
                </span>
              </div>
              <div className="space-y-4">
                <h1 className="font-bold text-5xl text-teal-600">10+</h1>
                <span className="text-[#999999] text-sm">Handled Projects</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
      <div ref={sectionRefs.service}>
        <Card
          title="service"
          icon={<BriefcaseBusiness size={16} className="text-teal-500 me-2" />}
        >
          <div className="space-y-5">
            <h2 className="text-4xl text-white font-semibold">
              My <span className="text-teal-600 font-bold">Services</span>
            </h2>

            <p className="text-[#999999] max-w-3xl">
              Hi 👋🏽, I am{" "}
              <span className="font-semibold text-white">Asaiah Henson</span>, a
              I design products that are more than pretty. I make them shippable
              and usable, tempor non mollit dolor et do aute.
            </p>
            <div className="grid md:grid-cols-2 w-full gap-10">
              {GridLoop.map((grid, i) => (
                <GridCard
                  key={grid.id}
                  skill={grid.title}
                  no={`0${i + 1}`}
                  desc={grid.desc}
                  icon={grid.icon}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
      <div ref={sectionRefs.skill}>
        <Card
          icon={<BriefcaseBusiness size={16} className="text-teal-500 me-2" />}
          title="Testimonial"
        >
          <AnimatedTestimonialsDemo />
        </Card>
      </div>
      <div ref={sectionRefs.resume}>
        {/* Resume section */}
        <Card
          icon={<FileText size={16} className="text-teal-500 me-2" />}
          title="Resume"
        >
          <Resume />
        </Card>
      </div>
      <div ref={sectionRefs.portfolio}>
        <Card
          icon={<FolderGit2 size={16} className="text-teal-500 me-2" />}
          title="Portfolio"
        >
          <LayoutGridDemo />
        </Card>
      </div>
      <div ref={sectionRefs.blog}>
        {/* Blog section */}
        <Card
          icon={<FolderGit2 size={16} className="text-teal-500 me-2" />}
          title="Blog"
        >
          <h2 className="text-4xl text-white font-semibold">
            My <span className="text-teal-600 font-bold">Education</span>
          </h2>

          <p className="text-[#999999] max-w-xl">
            I am so good at problem solving, Making Science project for My
            Institution. Already got so many prizes and Certificates.
          </p>
          <div>
            <BentoGridDemo/>
          </div>
        </Card>
      </div>
      <div ref={sectionRefs.contact}>{/* Contact section */}</div>
    </div>
  );
}

