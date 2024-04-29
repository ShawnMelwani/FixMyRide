import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mini",
  description: "Mini overview and model comparison.",
};

export default function Mini() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Mini Overview</H1>
        <section className="space-y-6">
          <H2>Mini Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2009 <br />
            <strong>Most Complaints:</strong> Mini Cooper S <br />
            FixMyRide has 332 complaints on file for Mini vehicles. <br />
            The worst models are the 2009 Cooper S, 2007 Cooper S, 2006 Cooper S, 2005 Cooper S, and the 2005 Cooper.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/mini/models/Cooper">Cooper</Link> - 115 complaints</li>
            <li><Link href="/mini/models/Cooper S">Cooper S</Link> - 140 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Mini Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Transmission Clunks</strong> <br />
              <span>2005 Cooper S</span> <br />
              <span>Average Cost to Fix: $10,000</span> <br />
              <span>Average Mileage: 68,000 miles</span>
            </li>
            <li>
              <strong>#2: Clutch Failure</strong> <br />
              <span>2009 John Cooper Works</span> <br />
              <span>Average Cost to Fix: $3,200</span> <br />
              <span>Average Mileage: 13,000 miles</span>
            </li>
            <li>
              <strong>#3: Timing Chain Broken</strong> <br />
              <span>2009 Cooper S</span> <br />
              <span>Average Cost to Fix: $2,900</span> <br />
              <span>Average Mileage: 68,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
