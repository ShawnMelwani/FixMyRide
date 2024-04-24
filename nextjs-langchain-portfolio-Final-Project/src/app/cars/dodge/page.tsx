import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dodge",
  description: "Dodge overview and model comparison.",
};

export default function Dodge() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Dodge Overview</H1>
        <section className="space-y-6">
          <H2>Dodge Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2002 <br />
            <strong>Most Complaints:</strong> Dodge RAM 1500 <br />
            CarComplaints.com has 26,238 complaints on file for Dodge vehicles. <br />
            The worst models are the 2000 Intrepid, 2009 Journey, 2002 Ram 1500, 2013 Dart, and the 2011 Ram 1500.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/dodge/models/Avenger">Avenger</Link> - 941 complaints</li>
            <li><Link href="/dodge/models/Caravan">Caravan</Link> - 1,041 complaints</li>
            <li><Link href="/dodge/models/Challenger">Challenger</Link> - 309 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Dodge Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Oil Sludge Resulting In Engine Failure</strong> <br />
              <span>1999 Intrepid</span> <br />
              <span>Average Cost to Fix: $4,300</span> <br />
              <span>Average Mileage: 87,000 miles</span>
            </li>
            <li>
              <strong>#2: Oil Sludge Resulting In Engine Failure</strong> <br />
              <span>2000 Intrepid</span> <br />
              <span>Average Cost to Fix: $4,200</span> <br />
              <span>Average Mileage: 93,000 miles</span>
            </li>
            <li>
              <strong>#3: Oil Sludge Resulting In Engine Failure</strong> <br />
              <span>2001 Intrepid</span> <br />
              <span>Average Cost to Fix: $4,400</span> <br />
              <span>Average Mileage: 89,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
