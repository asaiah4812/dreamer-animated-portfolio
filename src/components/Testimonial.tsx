import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Working with Asaiah was a game-changer for our SaaS product. They took our rough MVP and transformed it into a scalable, high-performance platform with Django and React. Highly recommend!",
      name: "Timi Osayamen",
      designation: "CEO Gradenet ICT",
      src: "/timi.png",
    },
    {
      quote:
        "Asaiah delivered a complex full-stack project under tight deadlines, seamlessly integrating RESTful APIs with a Next.js frontend. Their clean code and problem-solving mindset made them a trusted partner.",
      name: "John Okeke",
      designation: "CTO at Sandlip Oasis",
      src: "/john.jpg",
    },
    {
      quote:
        "I hired Henson to redo my legacy web application with modern tech (Python + TypeScript). Not only did they provide me with a 40% performance improvement but also stunning UI with Figma upfront.",
      name: "Ruth mamai",
      designation: "Operations Director at CloudScale",
      src: "/sarah.jpg",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "Emily Watson",
      designation: "Engineering Lead at DataPro",
      src: "/portfolio.jpg",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "/me.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
