"use client";
import React from "react";
import Image from "next/image";
import { TracingBeam } from "@/components/ui/tracing-beam";

export default function Page() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        {dummyContent.map((item, index) => (
          <div key={`content-${index}`} className="mb-10">
            <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
              {item.badge}
            </h2>
 
            <p className="text-xl mb-4">
              {item.title}
            </p>
 
            <div className="text-sm  prose prose-sm dark:prose-invert">
              {item?.image && (
                <Image
                  src={item.image}
                  alt="blog thumbnail"
                  height="1000"
                  width="1000"
                  className="rounded-lg mb-10 object-cover"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}
 
const dummyContent = [
  {
    title: "Ultimate Guide to Electric Vehicle Maintenance",
    description: (
      <>
        <p>
          Electric vehicles (EVs) are becoming increasingly popular, but many owners are unsure about the best maintenance practices. Learn about the essentials of battery care, motor maintenance, and the little details that keep your EV running smoothly.
        </p>
        <p>
          From routine inspections to understanding your vehicle&apos;s software updates, our comprehensive guide ensures you get the most out of your electric ride.
        </p>
      </>
    ),
    badge: "Maintenance Tips",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512464745103440/Tesla.jpeg?ex=663beacb&is=663a994b&hm=2f8f84ee34d4c293e2e71e43f3eafadb03e2a4f9a568c15efc3a36dda43110bc&",
  },
  {
    title: "Top 5 DIY Car Repair Tips",
    description: (
      <>
        <p>
          Save time and money with these do-it-yourself car repair tips. From changing your oil to replacing your air filters, we&apos;ll guide you through the basics of keeping your car in top condition without visiting the mechanic.
        </p>
        <p>
          We also cover the tools you&apos;ll need to start your DIY auto repair kit. Whether you&apos;re a seasoned car enthusiast or a beginner, these tips are essential for every car owner.
        </p>
      </>
    ),
    badge: "DIY Repair",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512461842645062/Porsche.webp?ex=663beaca&is=663a994a&hm=9a2630447e0523d5792a7b09d19772f41e6f75d95e11c25e54c4c151a552fef2&",
  },
  {
    title: "2024's Most Anticipated Cars",
    description: (
      <>
        <p>
          Check out our list of the most anticipated cars of 2024, featuring the latest in innovation and design from the world&apos;s leading manufacturers. From sleek sports cars to efficient family vehicles, find out what&apos;s coming to the market next year.
        </p>
        <p>
          Discover which features and advancements make these upcoming models stand out in a rapidly evolving automotive landscape.
        </p>
      </>
    ),
    badge: "Upcoming Releases",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512410815008921/Honda.jpeg?ex=663beabe&is=663a993e&hm=13105921e1f24bac8bc97adeeff8e796e96772308e94a276412ac7ce4a48139b&",
  },
];
