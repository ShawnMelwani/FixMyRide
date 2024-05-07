"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "@/components/ui/text-reveal-card";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LampContainer } from "@/components/ui/lamp";

import { motion } from "framer-motion";
const cars = [
  {
    id: 1,
    name: "Lexus",
    designation: "79",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512414212133015/Lexus.webp?ex=663beabf&is=663a993f&hm=ea3ffd378f3f27b5c8f6ad67df1892ca24126ea2b46fcb161f139172881582b1&",
  },
  {
    id: 2,
    name: "Toyota",
    designation: "76",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512465269395506/Toyota.jpeg?ex=663beacb&is=663a994b&hm=dca3ddaf753931f0d7d4930a572ec8942cd12dbf92ea93dc6997cf0ef9c829ce&",
  },
  {
    id: 3,
    name: "Mini",
    designation: "71",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512459934236824/Mini.jpeg?ex=663beaca&is=663a994a&hm=28f7bd6e7cc2fbf1fca735d0065e024dfe68dad407c049fc97d8f06600b777b1&",
  },
  {
    id: 4,
    name: "Acura",
    designation: "70",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512359174606918/Acura.jpeg?ex=663beab2&is=663a9932&hm=e40bd52ea4821e50c4742bec1e5580e1dc42b7429f9bdec7ec06238000dcc1c9&",
  },
  {
    id: 5,
    name: "Honda",
    designation: "70",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512410815008921/Honda.jpeg?ex=663beabe&is=663a993e&hm=13105921e1f24bac8bc97adeeff8e796e96772308e94a276412ac7ce4a48139b&",
  },
  {
    id: 6,
    name: "Subaru",
    designation: "69",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512464136933376/Subaru.jpeg?ex=663beacb&is=663a994b&hm=1a07aad00fb702e526e7236341363305d220dc312a2dda94325dbffc146a773f&",
  },
  {
    id: 7,
    name: "Mazda",
    designation: "67",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512414874960062/Mazda.webp?ex=663beabf&is=663a993f&hm=5e1f61f4e9d247c1bfe767342477d89ce5f0b1667af1bdb03a0d9ad76424aa10&",
  },
  {
    id: 8,
    name: "Porsche",
    designation: "66",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512461842645062/Porsche.webp?ex=663beaca&is=663a994a&hm=9a2630447e0523d5792a7b09d19772f41e6f75d95e11c25e54c4c151a552fef2&",
  },
  {
    id: 9,
    name: "BMW",
    designation: "64",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512360806187068/BMW.jpeg?ex=663beab2&is=663a9932&hm=cfee336eea45eeb9cfe8e3b4f2a10d3f2e14d7314f73c80d463dfac73190a4b9&",
  },
  {
    id: 10,
    name: "Kia",
    designation: "61",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512413247570001/Kia.jpeg?ex=663beabf&is=663a993f&hm=69f0485484d7c120d30bb98b0bc34350252ba4e2444efc6e267d72bb0b131fe1&",
  },
  {
    id: 11,
    name: "Hyundai",
    designation: "56",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512411209138227/Hyundai.jpeg?ex=663beabe&is=663a993e&hm=5d6335b59c833d699dce73e6bb53cf2018f3f714815ec0b6015e4b8f64734ba6&",
  },
  {
    id: 12,
    name: "Buick",
    designation: "55",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512361753972817/Buick.jpeg?ex=663beab2&is=663a9932&hm=e1f64eeccee24e539b7e1ffa18aee0318cd2a47ee23ba41be8ebba9d5749bdef&",
  },
  {
    id: 13,
    name: "Infiniti",
    designation: "53",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512411515457556/Infiniti.jpeg?ex=663beabe&is=663a993e&hm=09c93e6433ddc795e33650ef838d5a00f9ace8fb8603956be911cafe3ce0f7c6&",
  },
  {
    id: 14,
    name: "Tesla",
    designation: "48",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512464745103440/Tesla.jpeg?ex=663beacb&is=663a994b&hm=2f8f84ee34d4c293e2e71e43f3eafadb03e2a4f9a568c15efc3a36dda43110bc&",
  },
  {
    id: 15,
    name: "Ram",
    designation: "46",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512462773784636/Ram.jpeg?ex=663beaca&is=663a994a&hm=0a27a99539e046f5512c3f5235084fd63da0a225ffa58454cc563b4d458f1683&",
  },
  {
    id: 16,
    name: "Cadilliac",
    designation: "45",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512363125510195/Cadilliac.jpeg?ex=663beab3&is=663a9933&hm=45f79321a08caf1fde8be8ac32941a96434f3f8fee0952f4a5e2a38f83921682&",
  },
  {
    id: 17,
    name: "Nissan",
    designation: "45",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512460437557278/Nissan.jpeg?ex=663beaca&is=663a994a&hm=ef0157ef695b6b68a6ddb0ba94cec300303d0de1b682d9b1a4a65c1184687712&",
  },
  {
    id: 18,
    name: "Genesis",
    designation: "44",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512367412219904/Genesis.jpeg?ex=663beab4&is=663a9934&hm=9d326df0359efd0d1d6b9631eabe88622fcd8659bc1781625224d638909d7332&",
  },
  {
    id: 19,
    name: "Audi",
    designation: "43",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512360390955098/Audi.webp?ex=663beab2&is=663a9932&hm=ab7787b16093b171816cfba12c38b5d064d50b7a83d772c120cba2e7d45377fb&",
  },
  {
    id: 20,
    name: "Chevrolet",
    designation: "43",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512363708649502/Chevrolet.jpeg?ex=663beab3&is=663a9933&hm=886fdccd72d9878e34001c8ae9170d9f0381bf6a292ef636aebb3a7f8b1ea1e3&",
  },
  {
    id: 21,
    name: "Dodge",
    designation: "42",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512364442652713/Dodge.jpeg?ex=663beab3&is=663a9933&hm=9a03699076db9bbb9fd33701dee35ab754194e0adb01ec6d8b9cf18696139674&",
  },
  {
    id: 22,
    name: "Ford",
    designation: "40",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512366292209784/Ford.jpeg?ex=663beab3&is=663a9933&hm=639f35745bdec1344fed221022d9db19a3c3ae55bc55bb15be368539a06b55de&",
  },
  {
    id: 23,
    name: "Lincoln",
    designation: "38",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512414606659696/Lincoln.jpeg?ex=663beabf&is=663a993f&hm=ded8030ea236ba9214bb4ff694b080a3847fc1192f8a4bc48eb511e0b003ef2f&",
  },
  {
    id: 24,
    name: "GMC",
    designation: "36",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512410290458644/GMC.jpeg?ex=663beabe&is=663a993e&hm=16388bec26af784d68b1f72b36ee6e6646fb0e3925b951c42331ecb2a877d05b&",
  },
  {
    id: 25,
    name: "Volvo",
    designation: "28",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512466028695613/Volvo.jpeg?ex=663beacb&is=663a994b&hm=e7f1144dd14faa372074e14488f8da62b5999d36f46f0385fa19b42e79781e93&",
  },
  {
    id: 26,
    name: "Jeep",
    designation: "26",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512412219838464/Jeep.jpeg?ex=663beabe&is=663a993e&hm=ab74e544712d20d7a909eaa7d16d2e54b2a765f8e651e353c6a92a22bf2ff328&",
  },
  {
    id: 27,
    name: "Volkswagen",
    designation: "26",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512466330550282/vw.jpeg?ex=663beacb&is=663a994b&hm=2f644e4a9595ba656dfac05211bd1aafccdc342e4c42007dd3a99ca305e1354f&",
  },
  {
    id: 28,
    name: "Rivian",
    designation: "24",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512463407255573/Rivian.jpeg?ex=663beacb&is=663a994b&hm=304ccf116e7dd1246c04204970ac8b24ec4166456d4e946b1a41d5ce0e9f001d&",
  },
  {
    id: 29,
    name: "Mercedes-Benz",
    designation: "23",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512415642390618/Mercedes.jpeg?ex=663beabf&is=663a993f&hm=21e22a1120f828a7ae5019a57ddfa13511809ea2376b4dbcea121e11ebcf6df3&",
  },
  {
    id: 30,
    name: "Chrystler",
    designation: "18",
    image:
      "https://cdn.discordapp.com/attachments/483502468018208768/1237512364207640586/Chrystler.jpeg?ex=663beab3&is=663a9933&hm=e49814676b02f9a0f54d926ddb0b48dbe95174d791e7498748114f95e96ccc93&",
  },
  
];


export default function CarReliability() {
  return (
    <div>
      <div className="flex items-center justify-center bg-transparent h-[20rem] rounded-2xl w-full">
        <TextRevealCard
          text="You know the road"
          revealText="I know the reliability"
        >
          <TextRevealCardTitle>
            Cut straight to the chase
          </TextRevealCardTitle>
          <TextRevealCardDescription>
            Most Reliable Cars
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>

      <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-large tracking-tight text-transparent md:text-7xl"
      >
        Hover Over <br /> the cars
      </motion.h1>
    </LampContainer>
      
      <div className="flex flex-row items-center justify-center mb-10 w-full mt-0">
        <AnimatedTooltip items={cars} />
      </div>
    </div>
  );
}

