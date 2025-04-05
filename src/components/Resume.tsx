import Link from 'next/link';
import React from 'react'

const Experience = [
  {
    id:1,
    title: "DreamerCodeAcademy",
    date: "Mar, 2024 - Current",
    position: "Founder",
    description: "Innovating the concept of getting updates and save times"
  },
  {
    id:2,
    title: "DreamerCodeAcademy",
    date: "Mar, 2024 - Current",
    position: "Founder",
    description: "Innovating the concept of getting updates and save times"
  },
  {
    id:3,
    title: "DreamerCodeAcademy",
    date: "Mar, 2024 - Current",
    position: "Founder",
    description: "Innovating the concept of getting updates and save times"
  },
]

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
              <div className="flex flex-col gap-2">
                <Link href="#" className="text-white">
                  {exp.title}
                </Link>
                <span className="text-[#999999] text-sm">{exp.date}</span>
              </div>
              <div className="bg-slate-500 w-0.5 h-32 hidden sm:flex justify-center">
                <div className="p-2 rounded-full bg-slate-400/40 h-fit w-fit">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                </div>
              </div>
              <div>
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
          {Experience.map((exp) => (
            <div
              key={exp.id}
              className="flex justify-between flex-wrap gap-4 md:flex-nowrap "
            >
              <div className="flex flex-col gap-2">
                <Link href="#" className="text-white">
                  {exp.title}
                </Link>
                <span className="text-[#999999] text-sm">{exp.date}</span>
              </div>
              <div className="bg-slate-500 w-0.5 h-32 hidden sm:flex justify-center">
                <div className="p-2 rounded-full bg-slate-400/40 h-fit w-fit">
                  <div className="w-3 h-3 rounded-full bg-teal-400" />
                </div>
              </div>
              <div>
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
