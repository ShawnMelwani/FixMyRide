import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Audi",
  description: "Audi overview and model comparison.",
};

export default function Audi() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Audi Overview</H1>
        <section className="space-y-6">
          <H2>Audi Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2014 <br />
            <strong>Most Complaints:</strong> Audi A4 <br />
            FixMyRide has 1,098 complaints on file for Audi vehicles. <br />
            The worst models are the 2014 Q5, 2015 A3, 2017 Q7, 2011 A4, and the 2013 A4.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/audi/models/100">A4</Link> - 283 complaints</li>
            <li><Link href="/audi/models/200">Q5</Link> - 211 complaints</li>
            <li><Link href="/audi/models/4000">Q7</Link> - 74 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Audi Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Excessive Oil Usage</strong> <br />
              <span>2011 A4</span> <br />
              <span>Average Cost to Fix: $6,000</span> <br />
              <span>Average Mileage: 65,000 miles</span>
            </li>
            <li>
              <strong>#2: Excessive Oil Consumption</strong> <br />
              <span>2014 Q5</span> <br />
              <span>Average Cost to Fix: $3,200</span> <br />
              <span>Average Mileage: 71,000 miles</span>
            </li>
            <li>
              <strong>#3: Squealing From Brakes</strong> <br />
              <span>2017 Q7</span> <br />
              <span>Average Cost to Fix: $3,400</span> <br />
              <span>Average Mileage: 23,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
