import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Scion",
  description: "Scion overview and model comparison.",
};

export default function Scion() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Scion Overview</H1>
        <section className="space-y-6">
          <H2>Scion Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2008 <br />
            <strong>Most Complaints:</strong> Scion tC <br />
            FixMyRide has 380 complaints on file for Scion vehicles. <br />
            The worst models are the 2007 tC, 2013 FR-S, 2008 xD, 2012 iQ, and the 2008 tC.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/scion/models/tC">tC</Link> - 171 complaints</li>
            <li><Link href="/scion/models/FR-S">FR-S</Link> - 16 complaints</li>
            <li><Link href="/scion/models/xB">xB</Link> - 126 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Scion Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Excessive Oil Consumption</strong> <br />
              <span>2007 tC</span> <br />
              <span>Average Cost to Fix: $4,100</span> <br />
              <span>Average Mileage: 120,000 miles</span>
            </li>
            <li>
              <strong>#2: Engine Failure</strong> <br />
              <span>2013 FR-S</span> <br />
              <span>Average Cost to Fix: $6,700</span> <br />
              <span>Average Mileage: 68,000 miles</span>
            </li>
            <li>
              <strong>#3: Excessive Oil Consumption</strong> <br />
              <span>2008 tC</span> <br />
              <span>Average Cost to Fix: $4,000</span> <br />
              <span>Average Mileage: 113,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
