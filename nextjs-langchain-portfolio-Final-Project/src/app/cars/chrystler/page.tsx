import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chrysler",
  description: "Chrysler overview and model comparison.",
};

export default function Chrysler() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Chrysler Overview</H1>
        <section className="space-y-6">
          <H2>Chrysler Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2006 <br />
            <strong>Most Complaints:</strong> Chrysler Town & Country <br />
            CarComplaints.com has 8,473 complaints on file for Chrysler vehicles. <br />
            The worst models are the 2015 200, 2002 Sebring, 2001 Sebring, 2011 Town & Country, and the 2013 200.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/chrysler/models/200">200</Link> - 1,264 complaints</li>
            <li><Link href="/chrysler/models/Sebring">Sebring</Link> - 1,548 complaints</li>
            <li><Link href="/chrysler/models/Town & Country">Town & Country</Link> - 2,020 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Chrysler Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Oil Sludge Resulting In Engine Failure</strong> <br />
              <span>2002 Sebring</span> <br />
              <span>Average Cost to Fix: $4,000</span> <br />
              <span>Average Mileage: 94,000 miles</span>
            </li>
            <li>
              <strong>#2: Oil Sludge Resulting In Engine Failure</strong> <br />
              <span>2001 Sebring</span> <br />
              <span>Average Cost to Fix: $4,800</span> <br />
              <span>Average Mileage: 85,000 miles</span>
            </li>
            <li>
              <strong>#3: Engine Stalls/Shuts Off While Driving</strong> <br />
              <span>2015 200</span> <br />
              <span>Average Cost to Fix: $1,100</span> <br />
              <span>Average Mileage: 35,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
