import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Acura",
  description: "Acura overview and model comparison.",
};

export default function Acura() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Acura Overview</H1>
        <section className="space-y-6">
          <H2>Acura Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2015 <br />
            <strong>Most Complaints:</strong> Acura TL <br />
            FixMyRide has 1,643 complaints on file for Acura vehicles. <br />
            The worst models are the 2015 TLX, 2016 MDX, 2004 TL, 2010 TL, and the 2006 TL.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/acura/models/CL">CL</Link> - 27 complaints</li>
            <li><Link href="/acura/models/CSX">CSX</Link> - 6 complaints</li>
            <li><Link href="/acura/models/EL">EL</Link> - 17 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Acura Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Excessive Oil Consumption</strong> <br />
              <span>2010 TL</span> <br />
              <span>Average Cost to Fix: $6,500</span> <br />
              <span>Average Mileage: 63,000 miles</span>
            </li>
            <li>
              <strong>#2: Transmission Failure</strong> <br />
              <span>2003 TL</span> <br />
              <span>Average Cost to Fix: $2,800</span> <br />
              <span>Average Mileage: 114,000 miles</span>
            </li>
            <li>
              <strong>#3: Jerks Between Gears</strong> <br />
              <span>2015 TLX</span> <br />
              <span>Average Cost to Fix: N/A</span> <br />
              <span>Average Mileage: 5,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
