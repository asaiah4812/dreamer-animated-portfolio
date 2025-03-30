// context/ScrollContext.tsx
"use client";

import { createContext, useContext, useRef, RefObject } from "react";

type SectionRefs = {
  home: RefObject<HTMLDivElement>;
  profile: RefObject<HTMLDivElement>;
  service: RefObject<HTMLDivElement>;
  skill: RefObject<HTMLDivElement>;
  resume: RefObject<HTMLDivElement>;
  portfolio: RefObject<HTMLDivElement>;
  blog: RefObject<HTMLDivElement>;
  contact: RefObject<HTMLDivElement>;
};

const ScrollContext = createContext<SectionRefs | null>(null);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const homeRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider
      value={{ homeRef, profileRef, serviceRef, skillRef, resumeRef, portfolioRef, blogRef, contactRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) throw new Error("useScroll must be used within ScrollProvider");
  return context;
};
