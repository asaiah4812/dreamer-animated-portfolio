"use client"
import React from 'react'


const Card = ({
  title,
  children,
  icon
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ReactNode;
}) => {
  return (
    <main className="container mx-auto mt-7" suppressHydrationWarning>
      <section className="py-10 md:py-20  px-4 md:px-12 space-y-10 bg-slate-600/40 backdrop-blur-sm rounded-lg">
        <span className="ring-1 px-5 py-1 text-sm rounded-full inline-flex items-center w-fit ring-slate-400 text-slate-50 uppercase">
          {icon}
          {title}
        </span>
        {children}
      </section>
    </main>
  );
};

export default Card

export function GridCard({skill, no, desc, icon}:{skill:string; no:string; desc:string; icon:React.ReactNode}){
  return (
    <div className="ring-1 ring-[#707070] group p-8 transition-all ease-in-out duration-300 hover:ring-teal-600 hover:shadow-lg hover:shadow-teal-600 hover:scale-105">
      <div className="flex gap-5 justify-between">
        <h1
          className="text-8xl font-bold text-transparent transition-all duration-300  group-hover:[--stroke-color:rgb(13,148,136)]"
          style={{
            WebkitTextStroke: "0.5px var(--stroke-color, #707070)",
            WebkitTextStrokeColor: "var(--stroke-color, #707070)",
          }}
        >
          {no}
        </h1>
        {icon}
      </div>
      <div className="space-y-5">
        <h2 className="text-white text-2xl font-regular">{skill}</h2>
        <p className="text-[#999999]">{desc}</p>
      </div>
    </div>
  );
}
