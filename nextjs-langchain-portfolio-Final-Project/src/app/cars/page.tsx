"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect"


function cars() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Acura",
    description: "Luxury vehicle division of the Japanese automaker Honda, known for its advanced engineering and high-performance models.",
    link: "/cars/acura",
  },
  {
    title: "Audi",
    description: "German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles, celebrated for their Vorsprung durch Technik or 'Advancement through Technology'.",
    link: "/cars/audi",
  },
  {
    title: "BMW",
    description: "Prestigious German automaker renowned for its sporty and efficient luxury vehicles, with a strong emphasis on driving dynamics and innovation.",
    link: "/cars/bmw",
  },
  {
    title: "Buick",
    description: "American automobile brand owned by General Motors and distinguished by its modern, upscale vehicles that offer premium experiences without the premium price.",
    link: "/cars/buick",
  },
  {
    title: "Cadillac",
    description: "Iconic American luxury car brand known for its cutting-edge automotive technology and sophisticated design elements.",
    link: "/cars/cadillac",
  },
  {
    title: "Chevrolet",
    description: "Major American auto brand offering a full range of vehicles from subcompact cars to commercial trucks, known for performance and reliability.",
    link: "/cars/chevrolet",
  },
  {
    title: "Chrysler",
    description: "American automotive company, known for its innovative engineering and mid-to-high range vehicles including sedans, convertibles, and minivans.",
    link: "/cars/chrysler",
  },
  {
    title: "Dodge",
    description: "American brand of cars, minivans, and SUVs produced by FCA, known for its muscle cars with high-performance capabilities.",
    link: "/cars/dodge",
  },
  {
    title: "Ford",
    description: "Leading American auto manufacturer with a rich history of producing affordable and reliable cars and trucks, including the iconic Ford Mustang.",
    link: "/cars/ford",
  },
  {
    title: "Genesis",
    description: "Luxury vehicle division of the South Korean vehicle manufacturer Hyundai Motor Group, aiming to compete with premium brands with its emphasis on refined aesthetics and technology.",
    link: "/cars/genesis",
  },
  {
    title: "GMC",
    description: "General Motors division focused on trucks and utility vehicles, offering a range of robust, professional grade vehicles.",
    link: "/cars/gmc",
  },
  {
    title: "Honda",
    description: "Renowned Japanese automaker known for its innovative engineering, reliability, and manufacturing high-quality motorcycles and automobiles.",
    link: "/cars/honda",
  },
  {
    title: "Hyundai",
    description: "South Korean automobile manufacturer that offers well-designed, affordable vehicles with cutting-edge technology and strong warranties.",
    link: "/cars/hyundai",
  },
  {
    title: "Infiniti",
    description: "Luxury vehicle division of Nissan offering premium vehicles that combine luxury with high-performance in a sleek package.",
    link: "/cars/infiniti",
  },
  {
    title: "Jeep",
    description: "American automobile brand that is synonymous with rugged off-road capabilities, particularly known for its Wrangler and Grand Cherokee models.",
    link: "/cars/jeep",
  },
  {
    title: "Kia",
    description: "South Korean automaker known for its affordable, well-equipped vehicles, offering strong value with modern style and technology.",
    link: "/cars/kia",
  },
  {
    title: "Lexus",
    description: "Luxury vehicle division of Toyota known for its luxurious, well-crafted vehicles and a leader in hybrid technology.",
    link: "/cars/lexus",
  },
  {
    title: "Lincoln",
    description: "Luxury division of Ford, offering a range of stylish and luxurious vehicles known for their comfort and advanced technology features.",
    link: "/cars/lincoln",
  },
  {
    title: "Mazda",
    description: "Japanese automaker known for its focus on driving dynamics and innovative SKYACTIV technology, producing vehicles that combine efficiency with driving enjoyment.",
    link: "/cars/mazda",
  },
  {
    title: "Mercedes-Benz",
    description: "Renowned global automaker and a symbol of luxury and high performance, known for its premium vehicles that combine elegance with cutting-edge technology.",
    link: "/cars/mercedes-benz",
  },
  {
    title: "Mercury",
    description: "Former division of the Ford Motor Company marketed as an entry-level premium brand for nearly its entire existence, known for its slightly more luxurious vehicles.",
    link: "/cars/mercury",
  },
  {
    title: "Mini",
    description: "British automotive marque, owned by BMW since 2000, known for its small, iconic vehicles that offer a sporty, fun driving experience with distinctive styling.",
    link: "/cars/mini",
  },
  {
    title: "Mitsubishi",
    description: "Japanese multinational automotive manufacturer known for its adventurous and durable SUVs and a history of innovation in performance and technology.",
    link: "/cars/mitsubishi",
  },
  {
    title: "Nissan",
    description: "Japanese automaker known for its reliable and affordable cars as well as its leading electric vehicle, the Nissan Leaf.",
    link: "/cars/nissan",
  },
  {
    title: "Oldsmobile",
    description: "American automobile brand traditionally positioned within General Motors as a premium car, known for its innovation before it was discontinued in 2004.",
    link: "/cars/oldsmobile",
  },
  {
    title: "Plymouth",
    description: "Former automobile brand owned by Chrysler, known for its affordable pricing and simple, reliable cars before the brand was discontinued in 2001.",
    link: "/cars/plymouth",
  },
  {
    title: "Pontiac",
    description: "Former car brand that was part of the General Motors family, known for its sporty, performance-oriented image.",
    link: "/cars/pontiac",
  },
  {
    title: "Porsche",
    description: "German high-performance luxury automobile manufacturer specializing in sports cars, SUVs, and sedans, known for its powerful engines and sophisticated design.",
    link: "/cars/porsche",
  },
  {
    title: "Ram",
    description: "American brand of light to mid-weight pickup trucks known for their rugged durability and capability in demanding conditions.",
    link: "/cars/ram",
  },
  {
    title: "Rivian",
    description: "American electric vehicle automaker and automotive technology company known for its innovative electric trucks and SUVs designed for outdoor adventure.",
    link: "/cars/rivian",
  },
  {
    title: "Scion",
    description: "Former marque of Toyota aimed at the North American market that targeted younger customers with a lineup of budget-friendly, sporty vehicles.",
    link: "/cars/scion",
  },
  {
    title: "Subaru",
    description: "Japanese automaker known for its use of boxer engines and symmetrical all-wheel drive, offering rugged reliability and unique engineering.",
    link: "/cars/subaru",
  },
  {
    title: "Tesla",
    description: "American electric vehicle and clean energy company founded by Elon Musk, leading the charge in electric vehicle innovation.",
    link: "/cars/tesla",
  },
  {
    title: "Toyota",
    description: "World’s largest automaker, known for its durable and reliable vehicles, pioneering the hybrid technology market with the Toyota Prius.",
    link: "/cars/toyota",
  },
  {
    title: "Volvo",
    description: "Swedish premium automobile maker known for its focus on safety and environmentally friendly vehicles.",
    link: "/cars/volvo",
  },
  {
    title: "Volkswagen",
    description: "Iconic German automaker known globally for its Beetle model, offering a wide range of well-engineered cars, from the compact Golf to the luxurious Touareg.",
    link: "/cars/vw",
  },
];

export default cars;
