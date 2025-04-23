import Link from 'next/link';
import React from 'react'

interface ExpProps {
  id: number;
  title: string;
  date: string;
  position: string;
  description:string;
  url?: string | undefined;
}

const Experience: ExpProps[] = [
  {
    id: 1,
    title: "DreamerAcademy",
    date: "Mar, 2024 - Current",
    position: "Founder",
    description: "Innovating the concept of getting updates and save times",
    url: "https://dreameracademy.vercel.app/",
  },
  {
    id: 2,
    title: "Gradenet ICT",
    date: "Mar, 2024 - Current",
    position: "Fullstack Developer",
    description: "Innovating the concept of getting updates and save times",
    url: "https://gradenet.ng/",
  },
  {
    id: 3,
    title: "Algaddaf ICT Hub",
    date: "Nov, 2024 - 2025",
    position: "Webdeveloper",
    description: "Innovating the concept of getting updates and save times",
    url:'#'
  },
];


const Education:ExpProps[] = [
  {
    id: 1,
    title: "Taraba state University",
    date: "Nov, 2024 - 2025",
    position: "Computer Science",
    description: "Compter Science degree",
  },
];

const Resume = () => {
  return (
    <div>
      <div className="space-y-5">
        <h2 className="text-4xl text-white font-semibold">
          Work <span className="text-teal-600 font-bold">Experience</span>
        </h2>

        
        <p className="text-[#999999] max-w-xl">
          Strong communication and teamwork skills, with a focus on delivering
          exceptional results.
        </p>
        <div className="grid w-full">
          {Experience.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between flex-wrap gap-4 md:flex-nowrap "
            >
              <div className="flex flex-col flex-1 gap-2">
                {exp.url ? (
                  <Link href={exp.url} className="text-white">
                    {exp.title}
                  </Link>
                ) : (
                  <span className="text-white">{exp.title}</span>
                )}
                <span className="text-[#999999] text-sm">{exp.date}</span>
              </div>
              <div className="bg-slate-500 mr-10 w-0.5 h-32 hidden sm:flex justify-center">
                <div className="p-2 rounded-full bg-slate-400/40 h-fit w-fit">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-white text-xl">{exp.position}</h2>
                <p className="text-[#999999] text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-4xl text-white font-semibold">
          My <span className="text-teal-600 font-bold">Education</span>
        </h2>

        <p className="text-[#999999] max-w-xl">
          I am so good at problem solving, Making Science project for My
          Institution. Already got so many prizes and Certificates.
        </p>
        <div className="grid w-full">
          {Education.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between flex-wrap gap-4 md:flex-nowrap "
            >
              <div className="flex flex-col flex-1 gap-2">
                <Link href="#" className="text-white">
                  {exp.title}
                </Link>
                <span className="text-[#999999] text-sm">{exp.date}</span>
              </div>
              <div className="bg-slate-500 w-0.5 mr-10 h-32 hidden sm:flex justify-center">
                <div className="p-2 rounded-full bg-slate-400/40 h-fit w-fit">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                </div>
              </div>
              <div className='flex-1'>
                <h2 className="text-white text-xl">{exp.position}</h2>
                <p className="text-[#999999] text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resume
