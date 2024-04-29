import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GMC",
  description: "GMC overview and model comparison.",
};

export default function GMC() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>GMC Overview</H1>
        <section className="space-y-6">
          <H2>GMC Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2015 <br />
            <strong>Most Complaints:</strong> GMC Sierra 1500 <br />
            FixMyRide has 4,958 complaints on file for GMC vehicles. <br />
            The worst models are the 2008 Acadia, 2015 Sierra 1500, 2015 Yukon, 2014 Sierra 1500, and the 2010 Terrain.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/gmc/models/Acadia">Acadia</Link> - 880 complaints</li>
            <li><Link href="/gmc/models/Sierra 1500">Sierra 1500</Link> - 1,373 complaints</li>
            <li><Link href="/gmc/models/Yukon">Yukon</Link> - 761 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported GMC Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Failure</strong> <br />
              <span>2008 Acadia</span> <br />
              <span>Average Cost to Fix: $3,700</span> <br />
              <span>Average Mileage: 86,000 miles</span>
            </li>
            <li>
              <strong>#2: Transmission Failure</strong> <br />
              <span>2007 Acadia</span> <br />
              <span>Average Cost to Fix: $2,900</span> <br />
              <span>Average Mileage: 93,000 miles</span>
            </li>
            <li>
              <strong>#3: Excessive Oil Consumption</strong> <br />
              <span>2011 Terrain</span> <br />
              <span>Average Cost to Fix: $5,100</span> <br />
              <span>Average Mileage: 93,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
