"use client";
import { createContext, useContext, useRef, RefObject } from "react";

type SectionRefs = {
  home: RefObject<HTMLDivElement | null>;
  profile: RefObject<HTMLDivElement | null>;
  service: RefObject<HTMLDivElement | null>;
  skill: RefObject<HTMLDivElement | null>;
  resume: RefObject<HTMLDivElement | null>;
  portfolio: RefObject<HTMLDivElement | null>;
  blog: RefObject<HTMLDivElement | null>;
  contact: RefObject<HTMLDivElement | null>;
};

const ScrollContext = createContext<SectionRefs | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    profile: useRef<HTMLDivElement>(null),
    service: useRef<HTMLDivElement>(null),
    skill: useRef<HTMLDivElement>(null),
    resume: useRef<HTMLDivElement>(null),
    portfolio: useRef<HTMLDivElement>(null),
    blog: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  return (
    <ScrollContext.Provider value={sectionRefs}>
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used within ScrollProvider");
  return context;
};
