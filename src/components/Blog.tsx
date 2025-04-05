import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from 'next/image'

export function BentoGridDemo() {
  return (
    <BentoGrid className="mx-auto">
      {items.map((item) => (
        <BentoGridItem
          key={item.id}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ img, alt }: {img:string; alt:string;}) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl">
    <Image 
      src={img} 
      alt={alt} 
      className="object-cover rounded-xl"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </div>
);
const items = [
  {
    id: "innovation",
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton img="/blog/blog.jpg" alt="Innovation" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    id: "digital",
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton img="/blog/blog1.jpg" alt="Digital Revolution" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    id: "design",
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton img="/blog/blog2.jpg" alt="Design" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    id: "communication",
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton img="/blog/blog3.jpg" alt="Communication" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    id: "knowledge",
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton img="/blog/blog4.jpg" alt="Knowledge" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
  {
    id: "creation",
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton img="/blog/blog6.jpeg" alt="Creation" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    className: "md:col-span-2",
  },
  {
    id: "adventure",
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton img="/blog/blog7.jpeg" alt="Adventure" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    className: "",
  },
];
