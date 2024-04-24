import { H1 } from "@/components/ui/H1";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Popular Cars",
  description: "Browse through the most popular car brands and select your favorite.",
};

export default function Page() {
  // List of popular car brands
  const popularBrands = [
    "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Ford", "Genesis",
    "GMC", "Honda", "Hyundai", "Infiniti", "Jeep", "Kia", "Lexus", "Lincoln", "Mazda", "Mercedes-Benz",
    "Mercury", "Mini", "Mitsubishi", "Nissan", "Oldsmobile", "Plymouth", "Pontiac", "Porsche", "Ram",
    "Rivian", "Scion", "Subaru", "Tesla", "Toyota", "Volvo", "VW"
  ];

    return (
    <section className="space-y-6">
      <H1>Popular Cars</H1>
      <section className="grid grid-cols-2 gap-4">
        {popularBrands.map((brand, index) => (
          <Link key={index} href={`/cars/${encodeURIComponent(brand.toLowerCase())}`}>
            <div className="border border-gray-300 rounded-lg p-4 flex items-center justify-center text-center hover:bg-gray-100 cursor-pointer">
              {brand}
            </div>
          </Link>
        ))}
      </section>
    </section>
  );
}
