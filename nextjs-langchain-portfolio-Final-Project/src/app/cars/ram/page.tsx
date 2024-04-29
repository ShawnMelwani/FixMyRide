import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ram",
  description: "Ram overview and model comparison.",
};

export default function Ram() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Ram Overview</H1>
        <section className="space-y-6">
          <H2>Ram Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2014 <br />
            <strong>Most Complaints:</strong> Ram 1500 <br />
            FixMyRide has 2,087 complaints on file for Ram vehicles. <br />
            The worst models are the 2014 1500, 2013 1500, 2016 1500, 2019 1500, and the 2015 1500.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/ram/models/1500">1500</Link> - 1,479 complaints</li>
            <li><Link href="/ram/models/2500">2500</Link> - 273 complaints</li>
            <li><Link href="/ram/models/3500">3500</Link> - 194 complaints</li>
            {/* Additional model links can be added as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Ram Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Power Steering Failure</strong> <br />
              <span>2014 1500</span> <br />
              <span>Average Cost to Fix: $2,800</span> <br />
              <span>Average Mileage: 81,000 miles</span>
            </li>
            <li>
              <strong>#2: Engine Failure</strong> <br />
              <span>2016 1500</span> <br />
              <span>Average Cost to Fix: $7,100</span> <br />
              <span>Average Mileage: 78,000 miles</span>
            </li>
            <li>
              <strong>#3: Jumps When Coming To A Stop</strong> <br />
              <span>2016 1500</span> <br />
              <span>Average Cost to Fix: $10,000</span> <br />
              <span>Average Mileage: 35,000 miles</span>
            </li>
            {/* Additional reported problems can be added as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
