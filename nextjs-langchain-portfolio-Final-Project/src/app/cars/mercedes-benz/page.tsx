import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mercedes-Benz",
  description: "Mercedes-Benz overview and model comparison.",
};

export default function MercedesBenz() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Mercedes-Benz Overview</H1>
        <section className="space-y-6">
          <H2>Mercedes-Benz Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2007 <br />
            <strong>Most Complaints:</strong> Mercedes-Benz E350 <br />
            FixMyRide has 1,225 complaints on file for Mercedes-Benz vehicles. <br />
            The worst models are the 2012 C250, 2015 C300, 2006 E350, 2007 E350, and the 2013 C250.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/mercedes-benz/models/E350">E350</Link> - 160 complaints</li>
            <li><Link href="/mercedes-benz/models/C250">C250</Link> - 65 complaints</li>
            <li><Link href="/mercedes-benz/models/C300">C300</Link> - 131 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Mercedes-Benz Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Balance Shaft Failure</strong> <br />
              <span>2006 E350</span> <br />
              <span>Average Cost to Fix: $4,800</span> <br />
              <span>Average Mileage: 85,000 miles</span>
            </li>
            <li>
              <strong>#2: Rattling Noise When Starting</strong> <br />
              <span>2012 C250</span> <br />
              <span>Average Cost to Fix: $4,000</span> <br />
              <span>Average Mileage: 73,000 miles</span>
            </li>
            <li>
              <strong>#3: Engine Failure</strong> <br />
              <span>2016 C300</span> <br />
              <span>Average Cost to Fix: $15,600</span> <br />
              <span>Average Mileage: 48,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
