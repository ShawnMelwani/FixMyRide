import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nissan",
  description: "Nissan overview and model comparison.",
};

export default function Nissan() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Nissan Overview</H1>
        <section className="space-y-6">
          <H2>Nissan Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2005 <br />
            <strong>Most Complaints:</strong> Nissan Altima <br />
            FixMyRide has 17,577 complaints on file for Nissan vehicles. <br />
            The worst models are the 2013 Altima, 2014 Altima, 2005 Pathfinder, 2004 Maxima, and the 2015 Rogue.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/nissan/models/Altima">Altima</Link> - 5,321 complaints</li>
            <li><Link href="/nissan/models/Pathfinder">Pathfinder</Link> - 2,165 complaints</li>
            <li><Link href="/nissan/models/Rogue">Rogue</Link> - 1,360 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Nissan Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Coolant Leaked Into Transmission</strong> <br />
              <span>2005 Pathfinder</span> <br />
              <span>Average Cost to Fix: $3,900</span> <br />
              <span>Average Mileage: 102,000 miles</span>
            </li>
            <li>
              <strong>#2: CVT Shuttering, Vibration, Hesitation, Running Roughly</strong> <br />
              <span>2013 Altima</span> <br />
              <span>Average Cost to Fix: $3,100</span> <br />
              <span>Average Mileage: 56,000 miles</span>
            </li>
            <li>
              <strong>#3: Coolant Leaked Into Transmission</strong> <br />
              <span>2006 Pathfinder</span> <br />
              <span>Average Cost to Fix: $4,000</span> <br />
              <span>Average Mileage: 110,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
