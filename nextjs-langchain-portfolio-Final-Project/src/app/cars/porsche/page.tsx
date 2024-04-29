import { H1 } from "@/components/ui/H1";
import { H2 } from "@/components/ui/H2";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Porsche",
  description: "Porsche overview and model comparison.",
};

export default function Porsche() {
  return (
    <section className="space-y-8">
      <div className="max-w-3xl mx-auto">
        <H1>Porsche Overview</H1>
        <section className="space-y-6">
          <H2>Porsche Model Line Comparison</H2>
          <p className="mb-4">
            <strong>Worst Model Year:</strong> 2011 <br />
            <strong>Most Complaints:</strong> Porsche Cayenne <br />
            FixMyRide has 177 complaints on file for Porsche vehicles. <br />
            The worst models are the 2011 Cayenne, 2003 Boxster, 2004 Cayenne, 2011 Panamera, and the 2015 Macan.
          </p>
          <p>Click on a model below for more information:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><Link href="/porsche/models/Cayenne">Cayenne</Link> - 73 complaints</li>
            <li><Link href="/porsche/models/Boxster">Boxster</Link> - 35 complaints</li>
            <li><Link href="/porsche/models/Macan">Macan</Link> - 19 complaints</li>
            {/* Add more model links as needed */}
          </ul>
        </section>
        <section className="space-y-6">
          <H2>Worst Reported Porsche Problems</H2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <strong>#1: Intermediate Shaft Bearing Failed</strong> <br />
              <span>2003 Boxster</span> <br />
              <span>Average Cost to Fix: $14,200</span> <br />
              <span>Average Mileage: 56,000 miles</span>
            </li>
            <li>
              <strong>#2: Engine Failure</strong> <br />
              <span>2004 Carrera GT</span> <br />
              <span>Average Cost to Fix: $25,000</span> <br />
              <span>Average Mileage: 31,000 miles</span>
            </li>
            <li>
              <strong>#3: Cam Shaft Bolts Sheared Off</strong> <br />
              <span>2011 Panamera</span> <br />
              <span>Average Cost to Fix: $6,700</span> <br />
              <span>Average Mileage: 75,000 miles</span>
            </li>
            {/* Add more reported problems as needed */}
          </ol>
        </section>
      </div>
    </section>
  );
}
