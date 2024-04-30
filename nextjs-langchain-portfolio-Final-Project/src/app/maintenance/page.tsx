import { cn } from "@/lib/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

export default function maintenance() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "5,000 Mile Maintenance: Oil Change",
    description: "Having your oil changed frequently protects your engine and keeps it operating smoothly",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "30,000 Mile Maintenance - Scheduled Factory Maintenance",
    description: "Topping off of All fluids, including: transmission fluid, brake fluid, coolant, wiper fluid and, if applicable, power steering fluid.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "50,000 Mile Maintenance – Shock and Strut Replacement",
    description: "Shocks dampen and oscillate to dissipate the energy created from traveling over bumps and other road imperfections. A vehicle that has driven 50,000 miles has likely oscillated over 88 million times. Not only do struts and shocks provide a smoother ride, they also improve cornering, which gives you more control behind the wheel and helps improve stopping distance.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "60,000 Mile Maintenance – Belts, Hoses, and Tires",
    description:
      "Belts and hoses perform essential functions as part of your vehicle’s air conditioning, cooling, and charging systems. Due to constant exposure to heat, vibrations, and chemicals, over time belts and hoses are prone to cracks or leaks. While engine belts, drive belts, serpentine belts, and timing belts can be visually inspected and imperfections can be identified, hoses cannot.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "100,000 Mile Maintenance – Spark Plugs and Fluid Changes",
    description: "Spark plugs play a vital role in creating energy for the engine. Spark plugs that fail may cause a vehicle’s check engine light to illuminate, run rough, or have difficulty starting. Many newer vehicles utilize titanium spark plugs, which may last as much as 90,000 miles. Copper spark plugs will require more frequent replacements.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

