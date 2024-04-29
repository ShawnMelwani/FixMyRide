import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Jeep",
  description: "Jeep overview and model comparison.",
};

export default function Jeep() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Jeep Overview</H1>
        <section className="space-y-6">
          <H2>Jeep Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2014 <br />
            <strong>Most Complaints:</strong> Jeep Grand Cherokee <br />
            FixMyRide has 12,601 complaints on file for Jeep vehicles. <br />
            The worst models are the 2011 Grand Cherokee, 2014 Grand Cherokee, 2014 Cherokee, 2015 Grand Cherokee, and the 2015 Cherokee.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/jeep/models/Grand Cherokee">Grand Cherokee</Link> - 3,490 complaints</li>
            <li><Link href="/jeep/models/Cherokee">Cherokee</Link> - 2,174 complaints</li>
            <li><Link href="/jeep/models/Wrangler">Wrangler</Link> - 2,196 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Jeep Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Engine Shut Down</strong> <br />
              <span>2019 Cherokee</span> <br />
              <span>Average Cost to Fix: $6,000</span> <br />
              <span>Average Mileage: 17,000 miles</span>
            </li>
            <li>
              <strong>#2: TIPM Going Bad, Engine Won&apos;t Start Or Hard To Start</strong> <br />
              <span>2011 Grand Cherokee</span> <br />
              <span>Average Cost to Fix: $1,100</span> <br />
              <span>Average Mileage: 52,000 miles</span>
            </li>
            <li>
              <strong>#3: Electronic Shifting Unreliable</strong> <br />
              <span>2015 Grand Cherokee</span> <br />
              <span>Average Cost to Fix: $7,500</span> <br />
              <span>Average Mileage: 12,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
